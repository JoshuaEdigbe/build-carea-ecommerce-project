import "./styles.scss";
import { Button } from "../../../components/Button/Button";
import Format from "../../../components/Format/Format";
import { cta_img } from "../../../constants";
import { useNavigate } from "react-router-dom";

const LatestItems = () => {
  const navigation = useNavigate();
  const productList = () => {
    navigation("/about");
  };
  return (
    <div className="latest_items_bg">
      <Format>
        <div className="cta_wrapper">
          <div className="cta_message">
            <h1>Browse Our Fashion Paradise!</h1>
            <p>
              Step into a world of style and explore our diverse collection of
              clothing categories.
            </p>
            <Button
              label="Start browsing"
              className="cta_btn"
              icon="x"
              onClick={productList}
            />
          </div>
          <div className="cta_img">
            <img src={cta_img} alt="cta_img" />
          </div>
        </div>
      </Format>
    </div>
  );
};

export default LatestItems;
