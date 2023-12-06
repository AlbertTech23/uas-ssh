import "./TestiCard.scss";
import PropTypes from "prop-types";

const TestiCard = ({ picture, firstName, lastName, on, review }) => {
  return (
    <div className="testi-card relative p-8 pt-14 flex flex-col justify-between md:m-5 mt-16">
      <div className="commaAsset absolute top-[-35px] left-[35px]">
        <img className="" src="src/assets/comma.svg" alt="" />
      </div>
      <div className="testi-card-body">{review}</div>
      <div className="testi-card-footer flex">
        <img
          src={`src/assets/${picture}`}
          alt="testi"
          className="testi-card-footer-img rounded-full w-12 me-5"
        />
        <div className="testi-card-header flex flex-col">
          <span className="testi-card-header-name">
            {firstName}{" "}
            <span className="testi-card-header-lastname">{lastName}</span>
          </span>
          <span className="testi-card-header-on">on {on}</span>
        </div>
      </div>
    </div>
  );
};

TestiCard.propTypes = {
  picture: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  on: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default TestiCard;
