import "./OurPackages.scss";
import PackageCard from "./PackageCard";
import PackageCardMobile from "./PackageCardMobile";
import batikline from "../../assets/batik-line2.svg";
import packageA from "./assets/packageA.png";
import packageB from "./assets/packageB.png";
import packageC from "./assets/packageC.png";
import packageD from "./assets/packageD.png";
import React, { useState, useEffect } from "react";

const OurPackages = () => {
  const PackageName = [
    {
      id: 1,
      name: "A",
      img: packageA,
      appA1: "3x",
      appN1: "Pempek Kapal Selam",
      appA2: "3x",
      appN2: "Lenggang",
      appA3: "2x",
      appN3: "Risoles",
      mainA1: "2x",
      mainN1: "Rendang",
      mainA2: "2x",
      mainN2: "Gourmet Patin Fish Delicacy",
      mainA3: "3x",
      mainN3: "Kojo",
      desA1: "2x",
      desN1: "Red Bean Elegance",
      desA2: "2x",
      desN2: "Lumpang",
      desA3: "3x",
      desN3: "Kojo",
      drinkA1: "3x",
      drinkN1: "Passion Fruit Elixir",
      drinkA2: "2x",
      drinkN2: "Aia Aka",
      drinkA3: "3x",
      drinkN3: "Opulent Lychee-Infused Tea",
    },
    {
      id: 2,
      name: "B",
      img: packageB,
      appA1: "3x",
      appN1: "Crispy Garden Delights",
      appA2: "2x",
      appN2: "Tempting Tapioca Morsels",
      appA3: "2x",
      appN3: "Burgo",
      mainA1: "2x",
      mainN1: "Soto Padang",
      mainA2: "2x",
      mainN2: "Prime Beef Rib Infusion",
      mainA3: "2x",
      mainN3: "Na Tinombur",
      desA1: "2x",
      desN1: "Creamy Durian Delicacy",
      desA2: "2x",
      desN2: "Maksuba",
      desA3: "3x",
      desN3: "Pinyaram",
      drinkA1: "2x",
      drinkN1: "Exquisite Pandan Infusion",
      drinkA2: "2x",
      drinkN2: "Velvety Avocado Elixir",
      drinkA3: "3x",
      drinkN3: "Elixir of Secang Tranquility",
    },
    {
      id: 3,
      name: "C",
      img: packageC,
      appA1: "3x",
      appN1: "Stuffed Tofu Sophistication",
      appA2: "3x",
      appN2: "Batiah",
      appA3: "3x",
      appN3: "Lamang Tapai",
      mainA1: "2x",
      mainN1: "Medanese Duck Vermicelli",
      mainA2: "2x",
      mainN2: "Luxury in Sour-spiced Fish",
      mainA3: "3x",
      mainN3: "Cipera",
      desA1: "2x",
      desN1: "Ampiang Dadiah",
      desA2: "3x",
      desN2: "Lamang",
      desA3: "3x",
      desN3: "Suri",
      drinkA1: "3x",
      drinkN1: "Royal Medley of Juices",
      drinkA2: "2x",
      drinkN2: "Corn Euphoria",
      drinkA3: "3x",
      drinkN3: "Opulent Lychee-Infused Tea",
    },
    {
      id: 4,
      name: "D",
      img: packageD,
      appA1: "2x",
      appN1: "Spicy Beef Sensation",
      appA2: "3x",
      appN2: "Lumpia",
      appA3: "3x",
      appN3: "Luxurious Tapioca Delicacies",
      mainA1: "2x",
      mainN1: "Fine Vermicelli Curry",
      mainA2: "3x",
      mainN2: "Naniura",
      mainA3: "2x",
      mainN3: "Artisanal Chicken Dish",
      desA1: "2x",
      desN1: "Decadent Durian Temptation",
      desA2: "3x",
      desN2: "Bika Ambon",
      desA3: "3x",
      desN3: "Gandus",
      drinkA1: "2x",
      drinkN1: "Frothy Avocado Delight",
      drinkA2: "2x",
      drinkN2: "Exquisite Sweet Tea Infusion",
      drinkA3: "3x",
      drinkN3: "Golden Egg-Infused Elegance",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 740);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsDesktop(window.innerWidth > 740);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex-1 items-center container mx-auto mt-12 mb-12">
      <div className="flex flex-col items-center justify-center mt-7 mb-7">
        <p id="packageP">Buy a package, get your table</p>
        <h1 id="packageHeading">OUR PACKAGES</h1>
        <img id="batik" src={batikline} />
        <p id="packageDesc" className="mt-4">
          We provide you with these 4 ideal packages
        </p>
      </div>

      <div>
        {isMobile && (
          <div className="flex justify-center">
            <PackageCardMobile />
          </div>
        )}
        {isDesktop && (
          <div className="mx-7 md:mx-6 grid grid-cols-2 grid-rows-2 place-items-center">
            {PackageName.map((packageInfo) => (
              <div key={packageInfo.id}>
                <PackageCard
                  img={packageInfo.img}
                  name={packageInfo.name}
                  appA1={packageInfo.appA1}
                  appN1={packageInfo.appN1}
                  appA2={packageInfo.appA2}
                  appN2={packageInfo.appN2}
                  appA3={packageInfo.appA3}
                  appN3={packageInfo.appN3}
                  mainA1={packageInfo.mainA1}
                  mainN1={packageInfo.mainN1}
                  mainA2={packageInfo.mainA2}
                  mainN2={packageInfo.mainN2}
                  mainA3={packageInfo.mainA3}
                  mainN3={packageInfo.mainN3}
                  desA1={packageInfo.desA1}
                  desN1={packageInfo.desN1}
                  desA2={packageInfo.desA2}
                  desN2={packageInfo.desN2}
                  desA3={packageInfo.desA3}
                  desN3={packageInfo.desN3}
                  drinkA1={packageInfo.drinkA1}
                  drinkN1={packageInfo.drinkN1}
                  drinkA2={packageInfo.drinkA2}
                  drinkN2={packageInfo.drinkN2}
                  drinkA3={packageInfo.drinkA3}
                  drinkN3={packageInfo.drinkN3}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurPackages;
