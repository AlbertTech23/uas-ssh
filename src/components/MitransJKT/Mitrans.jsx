import { useState, useEffect } from "react";
import './styleMitra.css'
import logoSSHgw from '../../assets/gambar/sshlogoHD.svg'
import gmbranehGian from '../../assets/gambar/gambarAnehMT.svg'
import gambrQR from '../../assets/gambar/qrpertama.svg'
import cancelButn from '../../assets/gambar/XCircle.svg'

function Mitrans(pstop) {
    const [timeLeft, setTimeLeft] = useState(1800);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return pstop.cekk ? (
        <div className="contain-mitrs">
            <div className="content-isi">

                <div className="logo-midtrans">
                    <div className="ini-cancel">
                        <img src={cancelButn} onClick={() => pstop.fungsi(false)} />
                    </div>
                    <img src={logoSSHgw} />
                </div>
                <div className="ingfo-pckg">
                    <div className="total-pckg">
                        <div className="si-harganya">
                            <span className="si-text-total">Total</span>
                            <span className="barulah-harganya">Rp 500.000</span>
                        </div>
                        <div className="tiang-hitam"></div>
                        <div className="si-package">
                            <span className="si-text-package">Package</span>
                            <span className="barulah-package">{pstop.packageVal}</span>
                        </div>
                    </div>
                    <div className="img-gktahu">
                        <img src={gmbranehGian} />
                    </div>
                    <div className="gopay-menit">
                        <div className="sigopay">
                            <span className="text-gopay">Gopay</span>
                        </div>
                        <div>
                            <span className="countdown text-2xl simenit">
                                <span style={{ "--value": 0 }}></span>:
                                <span style={{ "--value": minutes }}></span>:
                                <span style={{ "--value": seconds }}></span>
                            </span>
                        </div>
                    </div>
                    <div className="keris-img">
                        <img src={gambrQR} />
                        <div className="cancel-text">
                            <span>Pilih silang untuk batalkan</span>
                        </div>
                    </div>
                    <div className="gwudh-bayar">
                        <button className="tmbl-bayar" onClick={() => document.getElementById('my_modal_5').showModal()}><span>Saya sudah bayar</span></button>
                        <div className="bxuhy">
                            <dialog id="my_modal_5" className="modal">
                                <div className="kotak-modal">
                                    <div className="judulnya-modalmid">
                                        <span>Reservation Successful!</span>
                                    </div>
                                    <div className="paragraf-modalmid">
                                        <span>Thank you for your reservation! We look forward to welcoming you for an extraordinary culinary experience. See you soon at our restaurant!</span>
                                    </div>
                                    <div className="petunjuk-modalmid">
                                        <span>Press click the button below to close or back to home</span>
                                    </div>
                                    <div className="box-yahtmbl">
                                        <form>
                                            <button className="tmbh-btoh">Back to home</button>
                                        </form>
                                        <form method="dialog" className="close-abgt">
                                            <button className="cls-butnnn" onClick={() => pstop.fungsi(false)}>Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    ) : "";
};

export default Mitrans;