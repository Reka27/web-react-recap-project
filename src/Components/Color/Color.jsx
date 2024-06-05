import ColorForm from "../Form/ColorForm";
import "./Color.css";
import { useState, useEffect } from "react";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [deleteColor, setDeleteColor] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  useEffect(() => {
    if (confirmDelete) {
      onDeleteColor(color.id);
    }
  }, [confirmDelete, onDeleteColor, color.id]);

  const handleDelete = () => {
    return setDeleteColor(true);
  };
  const handleEdit = () => {
    setEditColor(true);
  };
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hightlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {editColor ? (
        <>
          <ColorForm
            currentColor={color}
            currentAction={onEditColor}
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
              <button onClick={() => setConfirmDelete(true)}>DELETE</button>
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
