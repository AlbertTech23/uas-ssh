import "./Reservation.scss";
import { OurPackages, ReservationHeader } from "../../components";

import { OnlineReservation } from "../../components/OnlineReservation";

const Reservation = () => {


  return (
    <div className="ReservationContainer">
      <ReservationHeader />
      <OurPackages />
      <OnlineReservation />
    </div>

  );
};

export default Reservation;
