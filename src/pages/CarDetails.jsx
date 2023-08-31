import bmw from "../assets/img/bmw.png";
const CarDetails = () => {
  return (
    <section className="car-details">
      <div className="container">
        <div className="row">
          <div className="car-info">
            <div
              className="left-side"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img src={bmw} alt="" />
            </div>
            <div
              className="right-side"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="title">BMW</div>
              <div className="details">
                BMW is a German brand known for its luxurious and sporty cars.
                BMW models, which are made with high-quality materials and offer
                powerful engine options, enhance the driving experience.
              </div>
              <div className="price">84.000$</div>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
