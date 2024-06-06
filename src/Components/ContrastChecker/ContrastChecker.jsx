import { useState, useEffect } from "react";
import "./ContrastChecker.css";

export default function ContrastChecker({ hex, contrastText }) {
  const [contrastInfo, setContrastInfo] = useState("");
  useEffect(() => {
    async function fetchContrastChecker() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ colors: [hex, contrastText] }),
        }
      );
      if (!response.ok) {
        const error = new Error("An error occurred while fetching the data.");
        error.info = await response.json();
        error.status = response.status;
        throw error;
      }
      const data = await response.json();
      setContrastInfo(data.overall);
      console.log(data);
    }
    fetchContrastChecker();
  }, [hex, contrastText]);

  const background = () => {
    return contrastInfo === "Yup"
      ? "bg-yup"
      : contrastInfo === "Kinda"
      ? "bg-kinda"
      : contrastInfo === "Nope"
      ? "bg-nope"
      : "";
  };
  return <p className={background()}>Overall Contrast Score:{contrastInfo} </p>;
}
