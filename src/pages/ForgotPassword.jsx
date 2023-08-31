import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  // Navigate
  const navigate = useNavigate();

  // Schema
  const registerSchema = object({
    email: string().required().trim().email(),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/otp-confirmation");
  };
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <form
            id="registration-form"
            data-aos="fade-up"
            data-aos-duration="900"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
              />
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </div>

            <p className="text">
              Do you have an account? <Link to="/login">Login</Link>
            </p>
            <button type="submit" className="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
