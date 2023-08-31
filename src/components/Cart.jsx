import { Link } from "react-router-dom";
import bmw from "../assets/img/bmw.png";
const Cart = () => {
  return (
    <div className="cart" data-aos="fade-up" data-aos-duration="900">
      <div className="top">
        <img src={bmw} alt="" />
      </div>
      <h2 className="title">BMW</h2>
      <p className="detail">
        BMW is a German brand known for its luxurious and sporty cars. BMW
        models, which are made with high-quality materials and offer powerful
        engine options, enhance the driving experience.
      </p>
      <span className="number">84.000$</span>
      <div className="btn">
        <Link to="/car-detail">See More</Link>
      </div>
    </div>
  );
};

export default Cart;
