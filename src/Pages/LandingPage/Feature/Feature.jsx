import "./Feature.scss";
import Format from "../../../components/Format/Format";
import { feature_1, feature_2, feature_3 } from "../../../constants/index";

const Feature = () => {
  return (
    <Format>
      <div className="feature_wrapper">
        <div className="feature">
          <div className="img_wrapper">
            <img src={feature_1} alt="" />
          </div>
          <h3>Free Shipping</h3>
          <p>
            Upgrade your style today and get FREE shipping on all orders! Don't
            miss out.
          </p>
        </div>
        <div className="feature">
          <div className="img_wrapper">
            <img src={feature_3} alt="" />
          </div>
          <h3>Satisfaction Guarantee</h3>
          <p>
            Shop confidently with our Satisfaction Guarantee: Love it or get a
            refund.
          </p>
        </div>
        <div className="feature">
          <div className="img_wrapper">
            <img src={feature_2} alt="" />
          </div>
          <h3>Secure Payment</h3>
          <p>
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </div>
    </Format>
  );
};

export default Feature;
