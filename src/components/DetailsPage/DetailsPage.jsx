import { connect } from "react-redux";

import { addToCart } from "../../redux/Shopping/shopping-actions";
import "../DetailsPage/DetailsPage.css";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import search from "../../assets/search.svg";
import rating from "../../assets/rating.svg";
import avatar from "../../assets/avatar.svg";
import cartWithItem from "../../assets/cartWithItem.svg";
import { SectionWrapper } from "../../Layout/SectionWrapper";

const DetailsPage = ({ product, addToCart }) => {
  return (
    <div>
      {console.log(product.id)}
      <SectionWrapper>
        <section className="details-header">
          <div className="left-arrow">
            <img src={leftArrow} alt="leftArrow" />
          </div>
          <p className="details ">Details</p>
          <img src={search} alt="search" className="search" />
          <img src={cartWithItem} alt="cartWithItem" className="cart" />
        </section>

        <section>
          <div className="">
            <div className="product-image">
              <img src={product.image} alt="" className="" />
            </div>
            <p className="product-name">{product.name}</p>
            <p className="product-desc">{product.description}</p>
            <p className="price">
              {product.price}
              <span id="piece">/Piece</span>
            </p>
          </div>
        </section>

        <section>
          <div className="product-flex">
            <p className="product-info">Product Description</p>
            <img src={rightArrow} alt="rightArrow" />
          </div>
          <div className="product-flex r-r">
            <p className="product-info">Reviews and Ratings</p>
            <p className="view">View All</p>
          </div>
          <div className="">
            <section className="product-rating">
              <img src={rating} alt="rating" />
              <p>3.0</p>
            </section>
            <p className="rating-desc">
              This is the best product I have used in a long while and the size
              fits perfectly and I love the colors!!!!!
            </p>
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </section>

        <div className="buttons">
          <button
            onClick={() => addToCart(product.id)}
            className="primary-button"
          >
            Add to cart
          </button>
          <button className="secondary-button">Wishlist</button>
        </div>
      </SectionWrapper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(DetailsPage);
