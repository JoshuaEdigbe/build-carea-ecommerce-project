import "./Nav.scss";
import Format from "../../components/Format/Format";
import { logo, Search, Shop, User } from "../../constants";
import { Link, NavLink } from "react-router-dom";
import { menus } from "../../constants";
import { useEffect, useState } from "react";
import { LuAlignRight, LuSearch, LuX } from "react-icons/lu";
import SearchModal from "../../components/Search/SearchModal";
import Login from "../../Pages/Auth/Login/Login";

const Nav = ({ toggleSearch }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [LoginModal, setLoginModal] = useState(false);

  const handleLogin = () => {
    setLoginModal(true);
  };

  const handleScreenResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
    setIsMenuOpen(true);
  };
  const OpenMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return (
    <div className="nav">
      <Format height="height">
        {/* Mobile Nav */}
        {isMobile ? (
          <div className="nav_items">
            <Link to="/" className="logo">
              <img src={logo} alt="logo_ecommerce" />
              <p>Ecommerce</p>
            </Link>
            {isMenuOpen && (
              <>
                <div className="Overlay"></div>
                <div className="nav_menu_mobile">
                  {menus.map((menu) => {
                    return (
                      <div key={menu.id} className="menu">
                        <NavLink to={menu.to}>
                          {menu.label}
                          {menu.icon && (
                            <img
                              src={menu.icon}
                              alt="icon"
                              className="category_icon"
                            />
                          )}
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
            <div className="user_interact">
              <img src={Shop} alt="shopping_cart" />
              <img src={User} alt="User_icon" />
              <LuSearch
                onClick={toggleSearch}
                size={25}
                className="search_modal"
              />
              {isMenuOpen ? (
                <LuX
                  onClick={OpenMobileMenu}
                  size={30}
                  className="bars_mobile"
                />
              ) : (
                <LuAlignRight
                  onClick={OpenMobileMenu}
                  size={30}
                  className="bars_mobile"
                />
              )}
            </div>
            {/* {isSearchModalOpen && <SearchModal />} */}
          </div>
        ) : (
          // Desktop
          <div className="nav_items">
            <Link to="/" className="logo">
              <img src={logo} alt="logo_ecommerce" />
              <p>Ecommerce</p>
            </Link>
            <div className="nav_menu">
              {menus.map((menu) => {
                return (
                  <div key={menu.id} className="menu">
                    <NavLink to={menu.to}>
                      {menu.label}
                      {menu.icon && (
                        <img
                          src={menu.icon}
                          alt="icon"
                          className="category_icon"
                        />
                      )}
                    </NavLink>
                  </div>
                );
              })}
            </div>
            <div className="user_interact">
              <SearchModal />
              <img src={Shop} alt="shopping_cart" onClick="" />
              <Link to="/login">
                <img src={User} alt="User_icon" />
              </Link>
            </div>
          </div>
        )}
      </Format>
    </div>
  );
};

export default Nav;
