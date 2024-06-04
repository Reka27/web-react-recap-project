import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [colorValue, setColorValue] = useState(defaultValue);

  function handleColorInput(event) {
    setColorValue(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        name={id}
        id={id}
        value={colorValue}
        onChange={handleColorInput}
      />
      <input type="color" value={colorValue} onChange={handleColorInput} />
    </>
  );
}
