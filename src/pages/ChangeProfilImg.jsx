import profileImg from "../assets/img/profile-img.png";

const ChangeProfilImg = () => {
  return (
    <section className="change-profil-img">
      <div className="container">
        <div className="row">
          <form className="info" data-aos="fade-up" data-aos-duration="900">
            <div className="profile-img">
              <img src={profileImg} alt="profileImg" />
            </div>
            <div className="form-group">
              <label htmlFor="profileImage">Upload image</label>
              <input type="file" name="profileImage" id="profileImage " />
              <button type="submit" className="btn">
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangeProfilImg;
