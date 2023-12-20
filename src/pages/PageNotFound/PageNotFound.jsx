import "./404PageNotFound.scss";
import NotFound from "../../assets/404NotFound.svg";
import ArrowCircleRight from "../../assets/ArrowCircleRight.svg";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="NotFoundContainer xl:flex lg:flex-row md:flex-col lg:items-center lg:justify-between flex-col">
      <div className="leftNotFound xl:ps-40 lg:ps-16 md:ps-16 md:pt-14 pt-5 ps-8">
        <div className="flex flex-col pb-10">
          <img className="imageNotFound" src={NotFound} alt="404NotFound" />
          <span className="notfoundtitle">PAGE NOT FOUND</span>
          <span className="notfoundsubtitle">
            The page you're looking for doesn't exist or has been moved
          </span>
          <div className="buttonNotFoundContainer pt-8">
            BACK TO HOME
            <button
              className="arrowRightButton"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={ArrowCircleRight} alt="arrowRight" />
            </button>
          </div>
        </div>
      </div>
      <div className="rightNotFound xl:pe-40 lg:pe-16 md:pe-16 md:pt-10 pe-8">
        <div className="notFoundQuoteContainer flex flex-col items-end">
          <div className="notFoundQuotes flex flex-col items-end">
            <span className="notFoundQuoteWord">
              “Food is symbolic of love when words are inadequate.”
            </span>
            <span className="notFoundQuoteAuthor">— Alan D. Wolfelt</span>
          </div>
          <span className="wordNotFound pt-10">
            Click the button below to generate a new quote
          </span>
        </div>
        <div className="quotesButtonNFContainer pt-8">
          <button className="quotesButtonNF">FAMILY</button>
          <button className="quotesButtonNF">FOOD</button>
          <button className="quotesButtonNF">HAPPINESS</button>
          <button className="quotesButtonNF">DESIGN</button>
          <button className="quotesButtonNF">EXPERIENCE</button>
          <button className="quotesButtonNF">HEALTH</button>
        </div>
      </div>
      <div className="footer-comingsoon">
        <span className="footer-word">
          Copyright © <span className="footer-bold">Sumatra Sizzle House</span>{" "}
          | All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default PageNotFound;
