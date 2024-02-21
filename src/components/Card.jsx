import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <>
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="shoe"
          className="card_img"
        />
        <div className="card_details">
          <h3 className="card_title">Shoe</h3>
          <section className="card_review">
            <AiFillStar className="ratings_start" />
            <AiFillStar className="ratings_start" />
            <AiFillStar className="ratings_start" />
            <AiFillStar className="ratings_start" />
            <span className="total_reviews">4</span>
          </section>
          <section className="card_price">
            <div className="price">
              <del>$300</del>200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag_icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
