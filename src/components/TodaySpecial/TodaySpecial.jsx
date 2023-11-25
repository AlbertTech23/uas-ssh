import "./TodaySpecial.scss";

const service = [
  {
    id: 1,
    num: "01",
    title: "Fresh Ingredients",
    description:
      "From crisp vegetables to succulent meats, each ingredient reflects our commitment to quality and authenticity.",
  },
  {
    id: 2,
    num: "02",
    title: "Skilled Chefs",
    description:
      "Our skilled chefs craft culinary masterpieces with passion and expertise, ensuring every dish is a celebration of flavor and artistry.",
  },
  {
    id: 3,
    num: "03",
    title: "Incredible Menu",
    description:
      "Showcases a fusion of bold Sumatran flavors and innovative culinary creations, inviting you on a remarkable gastronomic journey.",
  },
];

function createServiceCard(service) {
  return (
    <ServiceCard
      key={service.id}
      num={service.num}
      title={service.title}
      description={service.description}
    />
  );
}

function ServiceCard(props) {
  return (
    <div className="serviceCard">
      <div className="evenly">
        <div className="num">{props.num}</div>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <button className="arrow">
          <img src="src/components/TodaySpecial/Images/Arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
}

const TodaySpecial = () => {
  return (
    <div className="todaySpecial">
      <div className="top">
        <img
          src="src/components/TodaySpecial/Images/Todays Special.png"
          alt="Today's Special"
        />
      </div>
      <div className="bottom">
        <img
          className="absolute -z-10"
          src="src/components/TodaySpecial/Images/Bottom TS.png"
          alt="Today's Special"
        />
        <div className="serviceContainer flex flex-wrap justify-around pt-30 h-[572px] items-center">
          <div className="service">{service.map(createServiceCard)}</div>
        </div>
      </div>
    </div>
  );
};

export default TodaySpecial;
