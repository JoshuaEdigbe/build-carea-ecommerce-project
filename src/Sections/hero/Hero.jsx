import { Button } from "../../components/Button/Button";
import Format from "../../components/Format/Format";
import { hero_img } from "../../constants";
import { useNavigate } from "react-router-dom";
import "./hero.scss";
import { LuArrowRight } from "react-icons/lu";
import { useState } from "react";
import SearchModal from "../../components/Search/SearchModal";
import Nav from "../Navigation/Nav";

const Hero = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const handleSearchVisibility = () => {
    setSearchVisible(!searchVisible);
    console.log("searchVisible");
  };
  const navigation = useNavigate();
  const viewCollection = () => {
    navigation("/about");
  };
  return (
    <div className="hero_bg">
      <Format>
        <div className="hero_wrapper">
          {/* {<Nav toggleSearch={handleSearchVisibility} />} */}
          {searchVisible && (
            <div className="modal">
              <SearchModal />{" "}
            </div>
          )}
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
