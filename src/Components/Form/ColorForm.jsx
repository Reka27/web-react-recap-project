import Button from "../Button/Button";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  currentColor,
  currentAction,
  editColor,
  setEditColor,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newColor = { ...data, id: currentColor.id };
    console.log(newColor);
    currentAction(newColor);
    editColor && setEditColor(false);
  }
  return (
    <form className="theme_creator_form" onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="role">Role</label>
          <br />
          <input
            type="text"
            name="role"
            id="role"
            defaultValue={currentColor.role}
          />
        </div>
        <div>
          <label htmlFor="hex">Hex</label>
          <br />
          <ColorInput id="hex" defaultValue={currentColor.hex} />
        </div>
        <div>
          <label htmlFor="contrastText">Contrast Text</label>
          <br />
          <ColorInput
            id="contrastText"
            defaultValue={currentColor.contrastText}
          />
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
