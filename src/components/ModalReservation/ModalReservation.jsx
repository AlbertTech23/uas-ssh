import "./ModalReservation.scss";
const ModalReservation = () => {
  return (
    <div className="container">
      <button
        className="testbtn"
        onClick={() => document.getElementById("my_modal").showModal()}
      >
        <span>Open Modal</span>
      </button>
      <dialog id="my_modal" className="modal">
        <div className="rectangle">
          <span1>Reservation Successful!👍🏼</span1>
          <br></br>
          <br></br>
          <span2>
            Thank you for your reservation! We look forward to welcoming you for
            an extraordinary culinary experience. See you soon at our
            restaurant!
          </span2>
          <br></br>

          <span3>Press click the button below to close or back to home</span3>

          <div className="btnUtama">
            <form method="dialog">
              <button className="btnBackToHome">
                <span>Back To Home</span>
              </button>
              <button className="btnClose">
                <span>Close</span>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalReservation;
