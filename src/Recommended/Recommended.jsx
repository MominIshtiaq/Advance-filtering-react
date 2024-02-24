import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended_title">Recommended</h2>
        <div className="recommended_flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Punma" title="Puma" />
          <Button onClickHandler={handleClick} value="V>ans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
