import "./StyleHeader.css";
import logo from "../../assets/gambar/SSH_-_LOGO 1.png";
import Carousel from "../Carousel/Carousel";
import { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [activeButton, setActbttn] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [btnMenu, setBtnMenu] = useState(false)

  const menuRef = useRef()

  useEffect(() => {
    const handleClickOutsideMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActbttn(false);
        setBtnMenu(false)
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
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const setScrollPosition = () => {
      if (window.scrollY > 200) {
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
        <div className={scroll ? "header-bg" : "header"}>
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="nav-menu">
            <div className={activeButton ? "res-nav" : ""}>
              <a className={windowWidth >= 768 ? "common" : activeButton ? "active" : "unactive"}>
                HOME
              </a>
              <a className={windowWidth >= 768 ? "common" : activeButton ? "active" : "unactive"}>
                ABOUT
              </a>
              <a role="button" onClick={() => setBtnMenu(!btnMenu)} className={windowWidth >= 768 ? "common" : activeButton ? btnMenu ? "active listActive" : "active" : "unactive"}>
                MENU
              </a>
              <div className={btnMenu ? scroll ? "listMenu-bg" : "listMenu" : "hide"}>
                <a className={windowWidth >= 768 ? "subListMenu" : activeButton ? btnMenu ? "active-ListMenu" : "unactive" : "hide"}>
                  <span>Appetizers</span>
                </a>
                <a className={windowWidth >= 768 ? "subListMenu" : activeButton ? btnMenu ? "active-ListMenu" : "unactive" : "hide"}>
                  <span>Main Course</span>
                </a>
                <a className={windowWidth >= 768 ? "subListMenu" : activeButton ? btnMenu ? "active-ListMenu" : "unactive" : "hide"}>
                  <span>Desserts</span>
                </a>
                <a className={windowWidth >= 768 ? "subListMenu" : activeButton ? btnMenu ? "active-ListMenu" : "unactive" : "hide"}>
                  <span>Drinks</span>
                </a>
              </div>
              <a className={windowWidth >= 768 ? "reserva" : activeButton ? "r-active" : "r-unactive"}>
                <span>RESERVATION</span>
              </a>
            </div>
            <div
              className="tombol" onClick={() => { setActbttn(!activeButton) }}
            ><RiMenu3Fill className="img-res-nav" /></div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Header;
