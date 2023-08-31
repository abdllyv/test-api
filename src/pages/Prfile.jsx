import { Link } from "react-router-dom";
import profileImg from "../assets/img/profile-img.png";

const Prfile = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="info" data-aos="fade-up" data-aos-duration="900">
            <div className="left-side">
              <img src={profileImg} alt="" />
              <div className="resetProfile">
                <div className="btn">
                  <Link to="/change-profilImg">Change Image</Link>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="user-info">Name SUrname</div>
              <div className="user-email">Email</div>
              <div className="resetPasword">
                <div className="btn">
                  <Link to="/forget-password">Change Pasword</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prfile;
