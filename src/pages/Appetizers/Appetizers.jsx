import "./Appetizers.scss";
import { MenuTemplate, HeaderMaster, Header, Footer } from "../../components";
import pempek from "../../assets/PempekKapalSelam.svg";
import lumpia from "../../assets/Lumpia.svg";
import tofu from "../../assets/Tofu.svg";
import heroAppetizers from "../../assets/HeroAppetizers.svg";

const menu1 = [
  {
    id: 1,
    title: "Pempek Kapal Selam",
    description: "Savory fish cake, a delectable Indonesian delicacy.",
    price: "Rp 70.000",
  },
  {
    id: 2,
    title: "Crispy Garden Delights",
    description: "Crispy vegetable fritters, a savory indulgence of textures.",
    price: "Rp 45.000",
  },
  {
    id: 3,
    title: "Tempting Tapioca Morsels",
    description: "Crispy fried snacks, a flavorful and satisfying treat.",
    price: "Rp 30.000",
  },
  {
    id: 4,
    title: "Luxurious Tapioca Delicacies",
    description: "Chewy tapioca balls, delightful in every flavorful bite.",
    price: "Rp 40.000",
  },
];

const menu2 = [
  {
    id: 1,
    title: "Lumpia",
    description: "Golden spring rolls, a visual and flavorful delight.",
    price: "Rp 45.000",
  },
  {
    id: 2,
    title: "Lenggang",
    description: "Fragrant coconut pancake, a delightful sweet sensation.",
    price: "Rp 50.000",
  },
  {
    id: 3,
    title: "Burgo",
    description: "Sumptuous stuffed tofu, a luxurious culinary masterpiece.",
    price: "Rp 110.000",
  },
  {
    id: 4,
    title: "Risoles",
    description: "Crispy filled crepes, savory bites of exquisite flavors.",
    price: "Rp 30.000",
  },
];

const menu3 = [
  {
    id: 1,
    title: "Stuffed Tofu Sophistication",
    description: "Stuffed tofu, a visual and flavorful masterpiece.",
    price: "Rp 30.000",
  },
  {
    id: 2,
    title: "Spicy Beef Sensation",
    description: "Spicy beef delicacy, a gourmet's delight in richness.",
    price: "Rp 110.000",
  },
  {
    id: 3,
    title: "Lamang Tapai",
    description: "Fragrant sticky rice, an aromatic culinary treasure.",
    price: "Rp 190.000",
  },
  {
    id: 4,
    title: "Batiah",
    description: "Sweet and spicy salad, a flavorful and satisfying treat.",
    price: "Rp 110.000",
  },
];

const Appetizers = () => {
  const teaserText = "TANTALIZING TEASERS";
  const menuDataSets = [menu1, menu2, menu3];
  const menuImageSets = [pempek, lumpia, tofu];

  const AppetizersInfo = {
    image: heroAppetizers,
    subheading: "-Our Menu-",
    heading: "Appetizers",
    paragraph:
      "Embark on your culinary adventure with our APPETIZERS, meticulously crafted to tantalize your taste buds. Each bite is a crescendo of taste, blending diverse ingredients in perfect harmony.",
  };

  return (
    <div>
      <Header />
      <div className="MenuBigContainer">
        <HeaderMaster
          imgSrc={AppetizersInfo.image}
          subheading={AppetizersInfo.subheading}
          heading={AppetizersInfo.heading}
          paragraph={AppetizersInfo.paragraph}
        />
        <MenuTemplate
          teaserText={teaserText}
          menuDataSets={menuDataSets}
          menuImageSets={menuImageSets}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Appetizers;
