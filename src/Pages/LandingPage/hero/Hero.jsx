import Format from "../../../components/Format/Format";
import { hero_img } from "../../../constants";
import { useNavigate } from "react-router-dom";
import "./hero.scss";
import { LuArrowRight } from "react-icons/lu";
import { Button } from "../../../components/Button/Button";

const Hero = () => {
  const navigation = useNavigate();
  const viewCollection = () => {
    navigation("/about");
  };
  return (
    <div className="hero_bg">
      <Format>
        <div className="hero_wrapper">
          <div className="hero_message">
            <h1>Fresh Arrivals Online</h1>
            <p>Discover Our Newest Collection Today.</p>
            <Button
              label="View Collection"
              className="hero_btn"
              icon={<LuArrowRight color="white" size={25} />}
              onClick={viewCollection}
            />
          </div>
          <div className="hero_img">
            <span className="ellipse"></span>
            <img src={hero_img} alt="" />
          </div>
        </div>
      </Format>
    </div>
  );
};

export default Hero;
