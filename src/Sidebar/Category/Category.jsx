import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <>
      <h2 className="sidebar_title">Category</h2>
      <div>
        <label className="sidebar_label_container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heel"
          title="Heels"
          name="test"
        />
      </div>
    </>
  );
};

export default Category;
