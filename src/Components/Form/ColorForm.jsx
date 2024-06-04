import Button from "../Button/Button";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ initialColor, onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
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
            defaultValue={initialColor.role}
          />
        </div>
        <div>
          <label htmlFor="hex">Hex</label>
          <br />
          <ColorInput id="hex" defaultValue={initialColor.hex} />
        </div>
        <div>
          <label htmlFor="contrast_text">Contrast Text</label>
          <br />
          <ColorInput
            id="contrast_text"
            defaultValue={initialColor.contrastText}
          />
        </div>
      </div>
      <div>
        <Button type="submit">ADD COLOR</Button>
      </div>
    </form>
  );
}
