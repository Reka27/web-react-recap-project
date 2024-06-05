import Button from "../Button/Button";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  color,
  onAddColor,
  onEditColor,
  editColor,
  setEditColor,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newColor = { ...data, id: color.id };
    console.log(newColor);
    if (editColor) {
      onEditColor(newColor);
      setEditColor(false);
    } else {
      onAddColor(data);
    }
  }
  return (
    <form className="theme_creator_form" onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="role">Role</label>
          <br />
          <input type="text" name="role" id="role" defaultValue={color.role} />
        </div>
        <div>
          <label htmlFor="hex">Hex</label>
          <br />
          <ColorInput id="hex" defaultValue={color.hex} />
        </div>
        <div>
          <label htmlFor="contrastText">Contrast Text</label>
          <br />
          <ColorInput id="contrastText" defaultValue={color.contrastText} />
        </div>
      </div>
      <div>
        <Button type="submit">
          {editColor ? "UPDATE COLOR" : "ADD COLOR"}
        </Button>
      </div>
    </form>
  );
}
