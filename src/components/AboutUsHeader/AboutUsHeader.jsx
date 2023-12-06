import "./AboutUsHeader.scss";
import "./fonts/Forum-Regular.ttf";
import "./fonts/Poppins/Poppins-Light.ttf"
import aboutusheader from "./assets/aboutusheader.png";

const AboutUsHeader = () => {
  return (
    <div className="relative w-full">
        <img src={ aboutusheader } className="w-full filter brightness-[30%]" />
        <div className="text-center absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 id="subheading">- About Us -</h1>
            <h1 id="heading">BEHIND THE DISHES</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. 
                Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
        </div>
    </div>
  );
};

export default AboutUsHeader;