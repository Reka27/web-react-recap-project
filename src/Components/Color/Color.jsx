import "./Color.css";
import { useState, useEffect } from "react";

export default function Color({ color, onDeleteColor }) {
  const [deleteColor, setDeleteColor] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  useEffect(() => {
    if (confirmDelete) {
      onDeleteColor(color.id);
    }
  }, [confirmDelete, onDeleteColor, color.id]);

  const handleDelete = () => {
    return setDeleteColor(true);
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
      {!deleteColor && <button onClick={handleDelete}>DELETE</button>}
      {deleteColor && (
        <div>
          <p className="color-card-hightlight">Really Delete?</p>
          <button onClick={() => setDeleteColor(false)}>CANCEL</button>
          <button onClick={() => setConfirmDelete(true)}>DELETE</button>
        </div>
      )}
    </div>
  );
}
