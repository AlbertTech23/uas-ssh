import "./WhoWeAre.scss";
import heading from "./assets/heading.png";
import whoweare from "./assets/whoweare.png";
import brand1 from "./assets/brand1.png";
import brand2 from "./assets/brand2.png";
import brand3 from "./assets/brand3.png";

const WhoWeAre = () => {
    return (
        <div>
            <div className="mx-auto flex flex-col items-center justify-center mt-7 mb-20">
                <span id="heading">
                    Who We Are
                </span>
                <img src={ heading }></img>
                <p id="desc" className="text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
                Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque 
                nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci 
                ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. 
                </p>
                <img id="image" src={ whoweare } className="mt-10 mb-14" />
                <div id="brands" className="flex flex-wrap sponsor-container mb-10 mt-10">
                    <img src={brand1} alt="GoFood" />
                    <img src={brand2} alt="Indofood" />
                    <img src={brand3} alt="ShopeeFood" />
                </div>
            </div>
        </div>
    );
  };
  
  export default WhoWeAre;