import "./StyleHeader.css";
import logo from "../../assets/gambar/SSH_-_LOGO 1.png";
import Carousel from "../Carousel/Carousel";
import { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [scroll, setScroll] = useState(false);
  const [activeButton, setActbttn] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [btnMenu, setBtnMenu] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutsideMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActbttn(false);
        setBtnMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 769) {
        setBtnMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const setScrollPosition = () => {
      if (window.scrollY > 500) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", setScrollPosition);

    return () => {
      window.removeEventListener("scroll", setScrollPosition);
    };
  }, []);

  return (
    <div className="">
      <div className="kepala" ref={menuRef}>
        <div
          className={
            scroll ? "header-bg" : !activeButton ? "header-bg" : "header"
          }
        >
          <div className="logo">
            <img
              src={logo}
              onClick={() => navigate("/")}
              className="cursor-pointer"
            />
          </div>
          <div className="nav-menu">
            <div className={activeButton ? "res-nav" : ""}>
              <a
                className={
                  windowWidth >= 769
                    ? "common"
                    : activeButton
                    ? "active"
                    : "unactive"
                }
                onClick={() => navigate("/")}
              >
                HOME
              </a>
              <a
                className={
                  windowWidth >= 769
                    ? "common"
                    : activeButton
                    ? "active"
                    : "unactive"
                }
                onClick={() => navigate("/about")}
              >
                ABOUT
              </a>
              <a
                role="button"
                onClick={() => setBtnMenu(!btnMenu)}
                className={
                  windowWidth >= 769
                    ? "common"
                    : activeButton
                    ? btnMenu
                      ? "active listActive"
                      : "active"
                    : "unactive"
                }
              >
                MENU
              </a>
              <div className={btnMenu ? "listMenu" : "listMenu hide"}>
                <a
                  className={
                    windowWidth >= 769
                      ? "subListMenu"
                      : activeButton
                      ? btnMenu
                        ? "active-ListMenu"
                        : "unactive"
                      : "hide"
                  }
                  onClick={() => navigate("/appetizers")}
                >
                  <span>Appetizers</span>
                </a>
                <a
                  className={
                    windowWidth >= 769
                      ? "subListMenu"
                      : activeButton
                      ? btnMenu
                        ? "active-ListMenu"
                        : "unactive"
                      : "hide"
                  }
                  onClick={() => navigate("/maincourse")}
                >
                  <span>Main Course</span>
                </a>
                <a
                  className={
                    windowWidth >= 769
                      ? "subListMenu"
                      : activeButton
                      ? btnMenu
                        ? "active-ListMenu"
                        : "unactive"
                      : "hide"
                  }
                  onClick={() => navigate("/desserts")}
                >
                  <span>Desserts</span>
                </a>
                <a
                  className={
                    windowWidth >= 769
                      ? "subListMenu"
                      : activeButton
                      ? btnMenu
                        ? "active-ListMenu"
                        : "unactive"
                      : "hide"
                  }
                  onClick={() => navigate("/drinks")}
                >
                  <span>Drinks</span>
                </a>
              </div>
              <button
                className={
                  windowWidth >= 769
                    ? "reserva"
                    : activeButton
                    ? "r-active"
                    : "r-unactive"
                }
                onClick={() => navigate("/reservation")}
              >
                <span>RESERVATION</span>
              </button>
            </div>
            <div
              className="tombol"
              onClick={() => {
                setActbttn(!activeButton);
              }}
            >
              <RiMenu3Fill className="img-res-nav" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
