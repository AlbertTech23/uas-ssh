import "./Reservation.scss";
import { OurPackages, ReservationHeader } from "../../components";

const Reservation = () => {
  return (
    <div className="ReservationContainer">
      <ReservationHeader />
      <OurPackages />
    </div>
  );
};

export default Reservation;
