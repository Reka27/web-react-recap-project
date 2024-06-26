import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Button from "./Components/Button/Button";
import "./Components/Button/Button.css";
import { useState } from "react";
import ColorForm from "./Components/Form/ColorForm";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [colorCard, setColorCard] = useLocalStorageState("colorCard", {
    defaultValue: initialColors,
  });
  const handleAddColor = (newColor) => {
    setColorCard([{ id: uid(), ...newColor }, ...colorCard]);
    setShowForm(false);
  };
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  const handleDeleteColor = (colorToDelete) => {
    setColorCard(colorCard.filter((color) => color.id !== colorToDelete));
  };
  const handleCopyColor = (hexValue) => {
    navigator.clipboard.writeText(hexValue);
  };
  const handleEditColor = (colorToEdit) => {
    console.log(colorToEdit, "Edit");
    setColorCard(
      colorCard.map((color) => {
        if (color.id == colorToEdit.id) return colorToEdit;
        return color;
      })
    );
  };
  return (
    <>
      <div className="button_title_container">
        <h1>Theme Creator</h1>
        <Button type="button" onClick={handleButtonClick}>
          {showForm ? "CANCEL" : "ADD NEW THEME"}
        </Button>
      </div>
      {showForm && (
        <ColorForm color={initialColors[0]} onAddColor={handleAddColor} />
      )}
      {colorCard.length == 0 ? (
        <p>No Colors...Start by adding one!</p>
      ) : (
        colorCard.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDeleteColor={handleDeleteColor}
              onEditColor={handleEditColor}
              onCopyColor={handleCopyColor}
            />
          );
        })
      )}
    </>
  );
}

export default App;
