import "./Products.css";
import Card from "../components/Card";

const Products = ({ result }) => {
  return (
    <>
      <section className="card_container">{result}</section>
    </>
  );
};

export default Products;
