import "./Price.css";

const Price = () => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar_title price_title">Price</h2>

        <label className="sidebar_label_container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$0 - $50
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$50 - $100
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$100 - $150
        </label>

        <label className="sidebar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Over $150
        </label>
      </div>
    </>
  );
};

export default Price;
