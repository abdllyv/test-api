import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const Login = () => {
  // Navigate
  const navigate = useNavigate();

  // Schema
  const registerSchema = object({
    email: string().required().trim().email(),
    password: string().required().trim().min(8).max(18),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
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
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <div className="error-message">{errors.password.message}</div>
              )}
            </div>
            <p className="text">
              Don't have an account? <Link to="/singUp">Sign up</Link>
            </p>
            <Link className="text" to="/forget-password">
              Forgot Pasword?
            </Link>
            <button type="submit" className="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
