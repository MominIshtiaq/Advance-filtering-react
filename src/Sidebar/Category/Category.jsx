import "./Category.css";

const Category = () => {
  return (
    <>
      <h2 className="sidebar_title">Category</h2>
      <div>
        <label className="sidebar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneakers
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandals
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </>
  );
};

export default Category;
