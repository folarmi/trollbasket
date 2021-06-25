import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import "../LandingPage.css";
import location from "../../assets/location.svg";
import order from "../../assets/order.svg";
import search from "../../assets/search.svg";
import cartPhoto from "../../assets/cart.svg";
import background from "../../assets/background.svg";
import orangeBg from "../../assets/orangeBg.svg";
import blueBg from "../../assets/blueBg.svg";
import popular from "../../assets/popular.svg";
import product from "../../assets/product.svg";
import recommend from "../../assets/recommend.svg";
import shop from "../../assets/shop.svg";
import home from "../../assets/home.svg";
import buy from "../../assets/buy.svg";
import deals from "../../assets/price.svg";
import more from "../../assets/more.svg";
import wallet from "../../assets/wallet.svg";
import { SectionWrapper } from "../../Layout/SectionWrapper";
import { Select } from "../atoms/Select";

const LandingPage = ({ products, cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [productToDisplay, setProductToDisplay] = useState(products);

  const getSearchValue = () => {
    const searchedItems = products.filter(
      (product) => product.name === searchValue
    );
    setProductToDisplay(searchedItems);
  };

  const filterByState = (val) => {
    const searchedState = products.filter(
      (product) => product.location === val
    );
    setProductToDisplay(searchedState);
    console.log(val, searchedState);
  };

  const state = [
    ["Lagos", "Lagos"],
    ["Ibadan", "Ibadan"],
    ["Ogun", "Ogun"],
  ];

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className="">
      <SectionWrapper>
        <header>
          <p className="">Trollbasket</p>
        </header>
      </SectionWrapper>

      <section className="option">
        <div className="header-flex ">
          <img src={location} alt="location" />
          <Select
            values={state}
            selectedValue="Lagos"
            onValueChange={(val) => filterByState(val)}
          />
        </div>
        <div className="header-flex order">
          <img src={order} alt="order" />
          <p>My Orders</p>
        </div>
        <Link
          to="/cart"
          className="header-flex"
          style={{ textDecoration: "none" }}
        >
          <div className="header-flex cart-details">
            <img src={cartPhoto} alt="cart" />
            <p>{cartCount}</p>
          </div>
          <p className="cart-name">Cart</p>
        </Link>
      </section>

      <SectionWrapper>
        <div className="input-icon">
          <img
            src={search}
            alt="search"
            className="icon"
            onClick={getSearchValue}
          />
          <input
            type="text"
            placeholder="Search merchbuy"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </SectionWrapper>

      <section className="banner">
        <img src={blueBg} alt="blueBg" />
        <img src={background} alt="background" className="middle" />
        <img src={orangeBg} alt="orangeBg" />
      </section>

      <SectionWrapper>
        <section className="icon-display">
          <div className="">
            <img src={product} alt="product" />
            <p>Product categories</p>
          </div>
          <div className="">
            <img src={popular} alt="popular" />
            <p>Popular Products</p>
          </div>
          <div className="">
            <img src={recommend} alt="recommend" />
            <p>Recommended Products</p>
          </div>
          <div className="">
            <img src={shop} alt="shop" />
            <p>Shops</p>
          </div>
        </section>

        <div className="products">
          {productToDisplay.map(({ id, name, image, price, stock }) => {
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

        <footer>
          <div className="">
            <img src={home} alt="home" />
            <p>Home</p>
          </div>
          <div className="">
            <img src={buy} alt="buy" />
            <p>Buy</p>
          </div>
          <div className="">
            <img src={deals} alt="deals" />
            <p>Deals</p>
          </div>
          <div className="">
            <img src={wallet} alt="wallet" />
            <p>Wallet</p>
          </div>
          <div className="">
            <img src={more} alt="more" />
            <p>More</p>
          </div>
        </footer>
      </SectionWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.allProducts,
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(LandingPage);
