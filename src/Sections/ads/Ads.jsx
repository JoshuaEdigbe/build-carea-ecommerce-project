import { Button } from "../../components/Button/Button";
import "./ads.scss";

const Ads = () => {
  const handleOrder = () => {
    console.log("Order Now");
  };
  return (
    <div className="ads">
      <p>Get 25% OFF on your first order.</p>
      <Button
        onClick={handleOrder}
        label="Order Now"
        className="order_button"
      />
    </div>
  );
};

export default Ads;
