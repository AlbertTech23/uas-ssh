import "./Reservation.scss";
import {
  OurPackages,
  ReservationHeader,
  Header,
  Footer,
} from "../../components";

import { OnlineReservation } from "../../components/OnlineReservation";

const Reservation = () => {
  return (
    <div className="ReservationContainer">
      <Header />
      <ReservationHeader />
      <OurPackages />
      <OnlineReservation />
      <Footer />
    </div>
  );
};

export default Reservation;
