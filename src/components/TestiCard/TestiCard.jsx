import "./TestiCard.scss";
import PropTypes from "prop-types";
import Male1 from "../../assets/MaleC1.png";
import Female1 from "../../assets/FemaleC1.png";
import Female2 from "../../assets/FemaleC2.png";
import comma from "../../assets/comma.svg";

const imageMap = {
  MaleC1: Male1,
  FemaleC1: Female1,
  FemaleC2: Female2,
};

const TestiCard = ({ picture, firstName, lastName, on, review }) => {
  const imageSrc = imageMap[picture];

  return (
    <div className="testi-card relative p-8 pt-14 flex flex-col justify-between md:m-5 mt-16">
      <div className="commaAsset absolute top-[-35px] left-[35px]">
        <img className="" src={comma} alt="" />
      </div>
      <div className="testi-card-body">{review}</div>
      <div className="testi-card-footer flex">
        <img
          src={imageSrc}
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
