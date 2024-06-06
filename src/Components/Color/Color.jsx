import ColorForm from "../Form/ColorForm";
import "./Color.css";
import { useState } from "react";
import ContrastChecker from "../ContrastChecker/ContrastChecker";
export default function Color({
  color,
  onDeleteColor,
  onEditColor,
  onCopyColor,
}) {
  const [deleteColor, setDeleteColor] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [copyColor, setCopyColor] = useState(false);

  const handleDelete = () => {
    return setDeleteColor(true);
  };
  const handleEdit = () => {
    setEditColor(true);
  };
  const handleCopy = () => {
    setCopyColor(true);
    onCopyColor(color.hex);
    // Attach the copy event listener
    document.addEventListener("copy", handleCopy);
    setTimeout(() => {
      setCopyColor(false);
      document.removeEventListener("copy", handleCopy);
    }, 3000);
  };

  /* const handlePaste = () => {
    setTimeout(() => {
      setCopyColor(false);
      document.removeEventListener("paste", handlePaste);
    }, 2000);
  };*/
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hightlight">{color.hex}</h3>
      <button onClick={handleCopy}>
        {copyColor ? "SUCCESSFULLY COPIED" : "COPY"}
      </button>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ContrastChecker
        hex={color.hex}
        contrastText={color.contrastText}
      ></ContrastChecker>
      <br />
      {editColor ? (
        <>
          <ColorForm
            color={color}
            onEditColor={onEditColor}
            editColor={editColor}
            setEditColor={setEditColor}
          />
          <button onClick={() => setEditColor(false)}>CANCEL</button>
        </>
      ) : (
        <>
          {deleteColor ? (
            <div>
              <p className="color-card-hightlight">Really Delete?</p>
              <button onClick={() => setDeleteColor(false)}>CANCEL</button>
              <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
            </div>
          ) : (
            <>
              <button onClick={handleDelete}>DELETE</button>
              <button onClick={handleEdit}>EDIT</button>{" "}
            </>
          )}
        </>
      )}
    </div>
  );
}
