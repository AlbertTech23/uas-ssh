import "./Stats.scss";

const statsData = [
  {
    header: "200+",
    subheader: "Daily Orders",
  },
  {
    header: "10+",
    subheader: "Awards Won",
  },
  {
    header: "100+",
    subheader: "Special Dishes",
  },
  {
    header: "25+",
    subheader: "Expert Chefs",
  },
];

function statsMapping(header, subheader) {
  return (
    <div className="stats-container text-center m-5">
      <div className="stats-header">{header}</div>
      <div className="stats-subheader">{subheader}</div>
    </div>
  );
}

const Stats = () => {
  return (
    <div className="stats-parent p-6 flex justify-evenly align-middle flex-wrap">
      {statsData.map((stat) => statsMapping(stat.header, stat.subheader))}
    </div>
  );
};

export default Stats;
