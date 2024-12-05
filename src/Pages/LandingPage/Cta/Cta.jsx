import "./styles.scss";
import Format from "../../../components/Format/Format";
import { Button } from "../../../components/Button/Button";

const Cta = () => {
  const handleSubscription = () => {
    console.log("subscribed!");
  };
  return (
    <div className="cta_bg">
      <Format>
        <div className="cta_footer_wrapper">
          <div className="cta_info">
            <h2>Join Our Newsletter</h2>
            <p>We love to surprise our subscribers with occasional gifts.</p>
          </div>
          <div className="cta_input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email Address"
            />
            <Button
              label="Subscribe"
              className="sub_btn"
              onClick={handleSubscription}
            />
          </div>
        </div>
      </Format>
    </div>
  );
};

export default Cta;
