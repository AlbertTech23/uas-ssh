import React, { useState, useEffect } from "react";
import axios from "axios";
import { Testimonials } from "../Testimonials";
import "./BottomAboutUs.scss";

const BottomAboutUs = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const category = "food";

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

  const generateNewQuote = () => {
    console.log("Clicked!");
    fetchQuotes();
  };

  return (
    <div className="bottomAboutContainer flex justify-center items-center flex-col">
      <Testimonials />
      <div className="bottomQuotesContainer mt-10 mb-20 flex flex-col justify-center items-center text-center">
        <div className="quotesContainer flex flex-col">
          {loading ? (
            <div className="generatingQuote">Generating new quote...</div>
          ) : (
            <div className="flex flex-col">
              <span className="quotes mb-5">"{quote}"</span>
              <span className="author">-{author}-</span>
            </div>
          )}
        </div>
        <div className="buttonQuotesContainer mt-7">
          <button
            className="buttonQuotes px-4 py-2"
            onClick={() => {
              fetchQuotes();
              generateNewQuote();
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Click to generate a new quote"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomAboutUs;
