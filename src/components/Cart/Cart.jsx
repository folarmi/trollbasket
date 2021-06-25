import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import deleteButton from "../../assets/delete.svg";
import leftArrow from "../../assets/leftArrow.svg";
import { SectionWrapper } from "../../Layout/SectionWrapper";
import { removeFromCart } from "../../redux/Shopping/shopping-actions";

import "../Cart/Cart.css";

const Cart = ({ products, cart, removeFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [input] = useState();
  const recentlyViewed = products.slice(1, 4);
  console.log(cart);
  const onChangeHandler = () => {};

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems]);
  return (
    <>
      <section className="cart-header">
        <div className="left-arrow">
          <img src={leftArrow} alt="leftArrow" />
        </div>
        <p className="details">Carts</p>
      </section>

      <div className="cart">
        <SectionWrapper>
          {cart.map(({ id, name, qty, image, price }) => {
            return (
              <div key={id} className="cart-card">
                <section className="cart-product">
                  <img src={image} alt="" className="cart-image" />
                  <div className="">
                    <p className="cart-name">{name}</p>
                    <p className="cart-price">N{price}</p>
                  </div>
                </section>

                <div className="cart-control">
                  <div
                    className="cart-delete"
                    onClick={() => removeFromCart(id)}
                  >
                    <img src={deleteButton} alt="delete" />
                    <p>Delete</p>
                  </div>
                  <div className="cart-add" onClick={onChangeHandler}>
                    <img src={plus} alt="plus" />
                    <p>{input}</p>
                    <img src={minus} alt="minus" />
                  </div>
                </div>
              </div>
            );
          })}
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="cart-summary">
          <div className="cart-subtotal">
            <p>Total Items</p>
            <p>{totalItems}</p>
          </div>
          <p className="cart-total">
            Total:<span id="totalPrice">{totalPrice}</span>
          </p>
          <Link to="/checkout">
            <button
              className="primary-button"
              style={{ width: "100%", marginTop: ".7rem" }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="product-flex r-r">
          <p className="product-info">Recently Viewed</p>
          <p className="view">View All</p>
        </div>
        <div className="products">
          {recentlyViewed.map(({ id, name, image, price, stock }) => {
            return (
              <Link className="product" key={id} to={`/details/${id}`}>
                <img src={image} alt={name} />
                <p className="product-name">{name}</p>
                <p className="product-price">{price}</p>
                <p className="product-quantity">MOQ {stock} (pieces)</p>
              </Link>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.allProducts,
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
