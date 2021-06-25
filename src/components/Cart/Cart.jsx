import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Shopping/shopping-actions";

import "../Cart/Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

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
    <div>
      {cart.map(({ id, name, qty, image }) => {
        return (
          <div key={id} className="">
            <p>{name}</p>
            <p>Quantity{qty}</p>
            <button>+</button>
            <button>-</button>
            <img src={image} alt="" />
            <button onClick={() => removeFromCart(id)}>delete</button>
          </div>
        );
      })}
      <div className="cart-summary">
        <p>totalitems :{totalItems}</p>
        <p>totalprice:{totalPrice}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
