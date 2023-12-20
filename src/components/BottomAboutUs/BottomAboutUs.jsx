import React, { useState, useEffect } from "react";
import axios from "axios";
import { Testimonials } from "../Testimonials";
import "./BottomAboutUs.scss";

const BottomAboutUs = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const category = "food";

  const fetchQuotes = async () => {
    try {
      const apiKey = "bFyBNgdmQ5Jx7Ria3PmGGw==kVMJtuSHr46XDi2H";

      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );

      console.log("API Response:", response);

      if (response.data && response.data.length > 0) {
        setQuotesData(response.data);
        setQuote(response.data[0].quote);
        setAuthor(response.data[0].author);
      } else {
        console.error("Error fetching quotes: Empty or undefined data");
      }
    } catch (error) {
      console.error("Error fetching quotes:", error.message);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [category]);

  const generateNewQuote = () => {
    console.log("Clicked!");
    setQuote(quotesData[0].quote);
    setAuthor(quotesData[0].author);
  };

  return (
    <div className="bottomAboutContainer flex justify-center items-center flex-col">
      <Testimonials />
      <div className="bottomQuotesContainer mb-20 flex flex-col justify-center items-center text-center">
        <div className="quotesContainer flex flex-col">
          <span className="quotes mb-5">"{quote}"</span>
          <span className="author">-{author}</span>
        </div>
        <div className="buttonQuotesContainer mt-7">
          <button
            className="buttonQuotes px-4 py-2"
            onClick={() => {
              fetchQuotes();
              generateNewQuote();
            }}
          >
            Click to generate a new quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomAboutUs;
