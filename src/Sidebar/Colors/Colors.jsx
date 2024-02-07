import "./Colors.css";

const Colors = () => {
  return (
    <div>
      <label className="sidebar_label_container color_title">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <label className="sidebar_label_container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Black
      </label>

      <label className="sidebar_label_container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Blue
      </label>

      <label className="sidebar_label_container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Red
      </label>

      <label className="sidebar_label_container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Green
      </label>

      <label className="sidebar_label_container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>White
      </label>
    </div>
  );
};

export default Colors;
