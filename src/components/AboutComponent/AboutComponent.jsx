import "./AboutComponent.scss";
import thumbnail from "./assets/about-us.png";
import strip from "./assets/about-us-strip.png";
import brand1 from "./assets/brand1.png";
import brand2 from "./assets/brand2.png";
import brand3 from "./assets/brand3.png";
import "./fonts/Forum-Regular.ttf";

const AboutComponent = () => {
  return (
    <div>
      {/* <div className="container mx-auto mt-12 mb-12 px-20 grid grid-cols-2 gap-4"> */}
      <div className="container mx-auto mt-12 mb-12 px-20 grid lg:grid-cols-2 md:grid-row-2 sm:grid-row-2 gap-4">
        <div className="flex items-center justify-center">
          <img src={thumbnail} className="h-50" alt="About Us Thumbnail" />
        </div>
        <div className="flex-container mt-12">
          <div className="flex items-center">
            <img src={strip} className="h-20" alt="About Us Strip" />
            <span id="heading" className="strip-height m-4">
              ABOUT US
            </span>
          </div>
          <p id="desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.
          </p>
          <a href="#">
            <button id="button" className="mt-5">
              READ MORE
            </button>
          </a>
        </div>
      </div>
      <div id="brands" className="flex flex-wrap container gap-4 mt-5 mb-5">
        <img src={brand1} alt="GoFood" />
        <img src={brand2} alt="Indofood" />
        <img src={brand3} alt="ShopeeFood" />
      </div>
    </div>
  );
};

export default AboutComponent;
