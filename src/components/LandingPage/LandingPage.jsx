import { Link } from "react-router-dom";

import "../LandingPage.css";
import { products } from "../../data/items";
import location from "../../assets/location.svg";
import order from "../../assets/order.svg";
import search from "../../assets/search.svg";
import cartWithItem from "../../assets/cartWithItem.svg";
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

const LandingPage = () => {
  return (
    <div className="">
      <SectionWrapper>
        <header>
          <p className="">Trollbasket</p>
        </header>

        <section className="option">
          <div className="header-flex">
            <img src={location} alt="location" />
            <select name="" id="">
              <option value="1">Lagos</option>
              <option value="1">Ogun</option>
              <option value="1">Ibadan</option>
            </select>
          </div>
          <div className="header-flex">
            <img src={order} alt="order" />
            <p>My Orders</p>
          </div>
          <div className="header-flex">
            <img src={cartWithItem} alt="cartWithItem" />
            <p>Cart</p>
          </div>
        </section>

        <div className="input-icon">
          <img src={search} alt="search" className="icon" />
          <input type="text" name="" id="" placeholder="Search merchbuy" />
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
          {products.map(({ id, name, image, price, stock }) => {
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

export default LandingPage;
