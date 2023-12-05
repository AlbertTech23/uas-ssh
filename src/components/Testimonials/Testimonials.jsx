import "./Testimonials.scss";
import "../";

const Testimonials = () => {
  return (
    <div className="testi-container flex flex-col items-center">
      <div className="testi-title pt-10 pb-3">Testimonials</div>
      <img
        className="batik-pattern"
        src="src/assets/batik-line2.svg"
        alt="batik-line"
      />
    </div>
  );
};

export default Testimonials;
