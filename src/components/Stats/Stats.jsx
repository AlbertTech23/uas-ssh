import "./Stats.scss";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

const statsData = [
  {
    header: "200",
    subheader: "Daily Orders",
  },
  {
    header: "10",
    subheader: "Awards Won",
  },
  {
    header: "100",
    subheader: "Special Dishes",
  },
  {
    header: "25",
    subheader: "Expert Chefs",
  },
];

function statsMapping(header, subheader, index) {
  return (
    <div key={index} className="stats-container text-center m-5">
      {/* <div className="stats-header">{header}</div> */}
      <div className="stats-header">
        <CountUp
          end={header}
          duration={2.5}
          suffix="+"
          enableScrollSpy
          scrollSpyDelay
        />
      </div>
      <div className="stats-subheader">{subheader}</div>
    </div>
  );
}

const Stats = () => {
  // useCountUp({
  //   ref: "counter",
  //   end: 1234567,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 1000,
  // });

  return (
    <div className="stats-parent p-6 flex justify-evenly align-middle flex-wrap">
      {statsData.map((stat, index) =>
        statsMapping(stat.header, stat.subheader, index)
      )}
    </div>
  );
};

export default Stats;
