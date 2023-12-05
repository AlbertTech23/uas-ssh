import "./StyleHeader.css";
import logo from "../../assets/gambar/SSH_-_LOGO 1.png";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import navreslogo from "../../assets/gambar/navlogo-respon.png";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [activeButton, setActbttn] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function setscrol() {
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  window.addEventListener("scroll", setscrol);

  return (
    <div>
      <div className="kepala">
        <div className={scroll ? "header-bg" : "header"}>
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="nav-menu">
            <div className={activeButton ? "res-nav" : ""}>
              <a
                href="#"
                className={
                  windowWidth >= 800
                    ? "common"
                    : activeButton
                    ? "active"
                    : "unactive"
                }
              >
                HOME
              </a>
              <a
                href="#"
                className={
                  windowWidth >= 800
                    ? "common"
                    : activeButton
                    ? "active"
                    : "unactive"
                }
              >
                ABOUT
              </a>
              <a
                href="#"
                className={
                  windowWidth >= 800
                    ? "common"
                    : activeButton
                    ? "active"
                    : "unactive"
                }
              >
                MENU
              </a>
              <a
                href="#"
                className={
                  windowWidth >= 800
                    ? "reserva"
                    : activeButton
                    ? "r-active"
                    : "r-unactive"
                }
              >
                <span>RESERVATION</span>
              </a>
            </div>
            <img
              src={navreslogo}
              type="button"
              className="tombol"
              onClick={() => setActbttn(!activeButton)}
            />
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Header;
