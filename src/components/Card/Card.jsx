import "./Card.scss";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = ({ img, name, availability, price, id }) => {
  const navigate = useNavigate();
  const handleAvailability = () => {
    navigate("/categories");
  };
  const handleProductNav = () => {
    navigate(`/product/${id}`);
    console.log("Clicked!");
  };
  return (
    <>
      <div className="card">
        <div onClick={handleProductNav} className="img_wrapper">
          <Link to={`/product/${img.id}`}>
            <img onClick={window.scrollTo(0, 0)} src={img} alt="" />
          </Link>
        </div>
        <div className="card_details">
          <h3 className="card_item_name">{name}</h3>
          <div className="card_item_stock">
            <Button
              label={availability}
              onClick={handleAvailability}
              className="card_item_availability"
            />
            <div className="card_item_price">{price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
