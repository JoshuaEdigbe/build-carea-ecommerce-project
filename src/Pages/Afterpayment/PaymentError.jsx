import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Button } from "../../components/Button/Button";
import Format from "../../components/Format/Format";
import { error } from "../../constants";
import "./Error.scss";

const PaymentError = () => {
  return (
    <div className="payment">
      <div className="bread_crumb_wrapper">
        <Format>
          <div className="bread_crumb_items">
            <h3>Failed Order</h3>
            <BreadCrumb />
          </div>
        </Format>
      </div>
      <div className="payment_icons">
        <img src={error} alt="" />
        <div className="payment_text">
          <h4>Oops! There was an issue</h4>
          <p>
            Oops! There was a problem processing your order. Please review the
            details and try again.
          </p>
          <Button label="Reorder" className="payment_btn" />
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
