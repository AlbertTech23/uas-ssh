import React, { useState, useEffect } from "react";
import axios from "axios";
import "./404PageNotFound.scss";
import NotFound from "../../assets/404NotFound.svg";
import ArrowCircleRight from "../../assets/ArrowCircleRight.svg";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("food"); // Default category
  const navigate = useNavigate();

  const fetchQuotes = async () => {
    try {
      setLoading(true);

      const apiKey = "bFyBNgdmQ5Jx7Ria3PmGGw==kVMJtuSHr46XDi2H";

      let response;
      let quoteTooLong = true;

      while (quoteTooLong) {
        response = await axios.get(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              "X-Api-Key": apiKey,
            },
          }
        );

        if (response.data && response.data.length > 0) {
          const newQuote = response.data[0].quote;
          const wordCount = newQuote.split(" ").length;

          if (wordCount <= 30) {
            setQuotesData(response.data);
            setQuote(newQuote);
            setAuthor(response.data[0].author);
            quoteTooLong = false;
          }
        } else {
          console.error("Error fetching quotes: Empty or undefined data");
          break;
        }
      }
    } catch (error) {
      console.error("Error fetching quotes:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    fetchQuotes();
  };

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
            {loading ? (
              <div className="generatingQuote">Generating new quote...</div>
            ) : (
              <div className="flex flex-col justify-end">
                <span className="notFoundQuoteWord">"{quote}"</span>
                <span className="notFoundQuoteAuthor">—{author}-</span>
              </div>
            )}
          </div>
          <span className="wordNotFound pt-10">
            Click the button below to generate a new quote
          </span>
        </div>
        <div className="quotesButtonNFContainer pt-8 items-end">
          <button
            className="quotesButtonNF"
            onClick={() => handleCategoryChange("family")}
          >
            FAMILY
          </button>
          <button
            className="quotesButtonNF"
            onClick={() => handleCategoryChange("food")}
          >
            FOOD
          </button>
          <button
            className="quotesButtonNF"
            onClick={() => handleCategoryChange("happiness")}
          >
            HAPPINESS
          </button>
          <button
            className="quotesButtonNF"
            onClick={() => handleCategoryChange("design")}
          >
            DESIGN
          </button>
          <button
            className="quotesButtonNF"
            onClick={() => handleCategoryChange("experience")}
          >
            EXPERIENCE
          </button>
          <button
            className="quotesButtonNF"
            onClick={() => handleCategoryChange("health")}
          >
            HEALTH
          </button>
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
