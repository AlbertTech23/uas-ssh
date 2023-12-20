import "./Desserts.scss";
import { MenuTemplate, HeaderMaster } from "../../components";
import redBean from "../../assets/RedBean.svg";
import ambon from "../../assets/BikaAmbon.svg";
import durian from "../../assets/Durian.svg";
import heroDesserts from "../../assets/HeroDessert.svg";

const menu1 = [
  {
    id: 1,
    title: "Red Bean Elegance",
    description: "Velvety red bean iced delight, rich and indulgent.",
    price: "Rp 30.000",
  },
  {
    id: 2,
    title: "Ampiang Dadiah",
    description: "Creamy dessert fusion, a luxurious creamy indulgence.",
    price: "Rp 40.000",
  },
  {
    id: 3,
    title: "Pinyaram",
    description: "Exotic and sweet temptation, an irresistible delicacy.",
    price: "Rp 30.000",
  },
  {
    id: 4,
    title: "Gandus",
    description: "Refined rice flour cake, delicate and aromatic pleasure.",
    price: "Rp 20.000",
  },
];

const menu2 = [
  {
    id: 1,
    title: "Bika Ambon",
    description: "Honeyed cake delight, a delicate and flavorful treat.",
    price: "Rp 40.000",
  },
  {
    id: 2,
    title: "Maksuba",
    description: "Exquisite layered cake, a pinnacle of delicate flavors.",
    price: "Rp 60.000",
  },
  {
    id: 3,
    title: "Kojo",
    description: "Velvety cake, indulgence in every moist bite.",
    price: "Rp 40.000",
  },
  {
    id: 4,
    title: "Suri",
    description: "Regal sponge cake, a delicate and luxurious delight.",
    price: "Rp 30.000",
  },
];

const menu3 = [
  {
    id: 1,
    title: "Creamy Durian Delicacy",
    description: "Creamy durian delight, a luxurious tropical treat.",
    price: "Rp 40.000",
  },
  {
    id: 2,
    title: "Decadent Durian Temptation",
    description: "Decadent durian delight, richness in every bite.",
    price: "Rp 80.000",
  },
  {
    id: 3,
    title: "Lumpang",
    description:
      "Heritage-inspired confection, a traditional delight redefined.",
    price: "Rp 30.000",
  },
  {
    id: 4,
    title: "Lamang",
    description: "Fragrant rice parcel, a traditional aromatic treasure.",
    price: "Rp 30.000",
  },
];

const Desserts = () => {
  const teaserText = "SWEET SYMPHONY";
  const menuDataSets = [menu1, menu2, menu3];
  const menuImageSets = [redBean, ambon, durian];

  const DessertsInfo = {
    image: heroDesserts,
    subheading: "-Our Menu-",
    heading: "Desserts",
    paragraph:
      "Conclude your meal on a sweet note with our meticulously crafted DESSERTS, each presenting a symphony of flavors, textures, and artful presentations that elevate the dining experience to a crescendo of indulgence.",
  };

  return (
    <div className="MenuBigContainer">
      <HeaderMaster
        imgSrc={DessertsInfo.image}
        subheading={DessertsInfo.subheading}
        heading={DessertsInfo.heading}
        paragraph={DessertsInfo.paragraph}
      />
      <MenuTemplate
        teaserText={teaserText}
        menuDataSets={menuDataSets}
        menuImageSets={menuImageSets}
      />
    </div>
  );
};

export default Desserts;
