import "./Footer.scss";
import Format from "../../components/Format/Format";
import {
  amc,
  f_logo,
  github,
  instagram,
  master,
  visa,
  youtube,
} from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_bg">
      <Format>
        <footer className="footer">
          <div className="footer_items">
            <div className="footer_logo_wrapper">
              <div className="logo">
                <img src={f_logo} alt="" />
                <h3>Ecommerce</h3>
              </div>
              <div className="text">
                DevCut is a YouTube channel for practical project-based
                learning.
              </div>
              <div className="socials">
                <img src={github} alt="" />
                <img src={youtube} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
            <div className="footer_links_wrapper">
              <div className="links">
                <h3>Supports</h3>
                <Link to="#">FAQ</Link>
                <Link to="#">Terms of USe</Link>
                <Link to="#">Privacy Policy</Link>
              </div>
              <div className="links">
                <h3>Company</h3>
                <Link to="#">About Us</Link>
                <Link to="#">Contact</Link>
                <Link to="#">Careers</Link>
              </div>
              <div className="links">
                <h3>Shop</h3>
                <Link to="#">My Account</Link>
                <Link to="#">Checkout</Link>
                <Link to="#">Cart</Link>
              </div>
            </div>
            <div className="footer_payment_options">
              <h3>Accepted Payments</h3>
              <div>
                <img src={master} alt="" />
                <img src={amc} alt="" />
                <img src={visa} alt="" />
              </div>
            </div>
          </div>
          <div className="footer_copyright">
            <p>© 2023 DevCut. All rights reserved.</p>
          </div>
        </footer>
      </Format>
    </div>
  );
};

export default Footer;
