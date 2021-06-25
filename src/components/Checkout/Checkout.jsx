import { SectionWrapper } from "../../Layout/SectionWrapper";
import checkout from "../../assets/checkout.svg";

import "../Checkout/Checkout.css";
const Checkout = () => {
  return (
    <div className="checkout">
      <SectionWrapper>
        <div className="checkout-content">
          <img src={checkout} alt="checkout" className="cart-image" />
          <p className="success">Checkout Succesful</p>
          <p className="successful">Your checkout is now successful.</p>
          <button
            className="secondary-button"
            style={{
              width: "90%",
              color: "#227eff",
              //   alignItems: "flex-end",
              marginTop: "auto",
              marginBottom: "2rem",
            }}
          >
            Got it
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Checkout;
