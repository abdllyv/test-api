import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const ResetPasword = () => {
  // Navigate
  const navigate = useNavigate();

  // Schema
  const registerSchema = object({
    password: string().required().trim().min(8).max(18),
    repassword: string().required().trim().min(8).max(18),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
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
              <label>Password</label>
              <input
                type="password"
                name="password"
                {...register("password")}
              />
              {errors.password && (
                <div className="error-message">{errors.password.message}</div>
              )}
            </div>
            <div className="form-group">
              <label>Repassword</label>
              <input
                type="password"
                name="repassword"
                {...register("repassword")}
              />
              {errors.repassword && (
                <div className="error-message">{errors.repassword.message}</div>
              )}
            </div>
            <button type="submit" className="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasword;
