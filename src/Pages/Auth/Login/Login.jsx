import "./Login.scss";
import Format from "../../../components/Format/Format";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { googleauth } from "../../../constants";
import { Button } from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <div className="bread_crumb_wrapper_success">
        <Format>
          <div className="bread_crumb_items">
            <h3>Login</h3>
            <BreadCrumb />
          </div>
        </Format>
      </div>
      <form className="auth_input_wrapper">
        <div className="google_auth">
          <img src={googleauth} alt="" className="google_icon" />
          <p className="google_text">Continue with Google</p>
        </div>
        <div className="line">OR</div>
        <Input label="Email" type="email" required />
        <Input label="Password" type="password" required />
        <Link to="/forgot-password" className="forgot_password">
          Forgot Password?
        </Link>
        <Button label="Login" className=" btn btn_auth" />
        <p className="signup_link">
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;