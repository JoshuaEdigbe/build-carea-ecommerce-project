import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Button } from "../../components/Button/Button";
import Format from "../../components/Format/Format";
import { success } from "../../constants";
import "./Successful.scss";

const PaymentSuccess = () => {
  return (
    <div className="payment">
      <div className="bread_crumb_wrapper_success">
        <Format>
          <div className="bread_crumb_items">
            <h3>Successful Order</h3>
            <BreadCrumb />
          </div>
        </Format>
      </div>
      <div className="payment_icons">
        <img src={success} alt="" />
        <div className="payment_text">
          <h4>Thank you for shopping</h4>
          <p>
            Your order has been successfully placed and is now being processed.
          </p>
          <Button label="Go to my Account" className="payment_btn" />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
