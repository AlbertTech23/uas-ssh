import './styleOnlineReservation.css';
import diskonIMG from '../../assets/gambar/Discount.svg';
import inputLogoBaby from '../../assets/gambar/logo-baby.svg';
import inputAdultNum from '../../assets/gambar/logo-numAdult.svg';
import inputGarpu from '../../assets/gambar/garpu-sendok.svg';
import logoDropDown from '../../assets/gambar/dropdown-menu.svg';
import logojam from '../../assets/gambar/jam.svg'
import { useState } from 'react';
import Mitrans from '../MitransJKT/Mitrans';

function OnlineReservation() {
    const [actvTextTod, setTextTod] = useState(true);
    const [actvTextAdu, setTextAdu] = useState(true);
    const [actvTextPac, setTextPac] = useState(true);
    const [valPac, setValPac] = useState("");
    const [tmblAfa, setTmblAfa] = useState(false);
    const [userName, setUserName] = useState("");

    const numAdults = [
        {
            value: 1,
            label: 1
        },
        {
            value: 2,
            label: 2
        },
        {
            value: 3,
            label: 4
        }
    ];

    const numToddlers = [
        {
            value: 1,
            label: 1
        },
        {
            value: 2,
            label: 2
        },
        {
            value: 3,
            label: 4
        }
    ];

    const packageOrder = [
        {
            label: "A"
        },
        {
            label: "B"
        },
        {
            label: "C"
        },
        {
            label: "D"
        }
    ];

    function ubahHaha(event) {
        setValPac(event.target.value)
    }

    console.log(valPac);

    function isValid() {
        if (userName !== "") {
            setTmblAfa(true);
        } else {
            setTmblAfa(false);
        }
    }

    return (
        <div className='contain'>
            <Mitrans cekk={tmblAfa} packageVal={valPac} fungsi={setTmblAfa} />
            <div className='container-onlnreserva'>
                <div className='content-onlnreserva'>
                    <div className='form-onlreserva'>
                        <div className="text-onlnreserva">
                            <span className='judul-onlnreserva'>Online Reservation</span>
                            <span className='sub-judul-onlnreserva'>Fill out the order form</span>
                        </div>
                        <form>
                            <div className="baris-pertama">
                                <div>
                                    <input type='text' placeholder='Your Name' required pattern='^[A-Za-z0-9]{3,16}$' onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div>
                                    <input type='text' placeholder='Phone Number' required pattern='^[0-9]{8}$' />
                                </div>
                            </div>
                            <div className="baris-kedua">
                                <div className='box-pack'>
                                    <div className="gambar-grpsdk">
                                        <img src={inputGarpu} />
                                    </div>
                                    {/* <div className={actvTextPac ? "text-sdkgrp" : "text-sdkgrp hide"}>
                                        <span>Package</span>
                                    </div> */}
                                    <div className="dropdown-tod-adu">
                                        <img src={logoDropDown} />
                                    </div>
                                    <select className='opsi-package' onChange={ubahHaha}>
                                        <option value="" className='pilihan-tod' disabled selected hidden>Package</option>
                                        {packageOrder.map((val, indx) => {
                                            return (
                                                <option className='pilihan-tod' key={indx} value={val.label}>Package {val.label}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className='box-date'>
                                    <input type='date' placeholder='DD-MM-YYYY' required />
                                </div>
                                <div className='box-time'>
                                    <div className="gambar-jam">
                                        <img src={logojam} />
                                    </div>
                                    <div className='box-box'>
                                        <select className='time-picker-select'>
                                            <option value="01" re>01</option>
                                        </select>:
                                        <select className='time-picker-select'>
                                            <option value="05">05</option>
                                        </select>
                                        <select className='time-picker-select'>
                                            <option value="am">am</option>
                                            <option value="pm">pm</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className="baris-ketiga">
                                <div className="toddler-kotak">
                                    <div className="gambar-tod">
                                        <img src={inputLogoBaby} />
                                    </div>
                                    {/* <div className={actvTextTod ? "text-tod" : "hide"}>
                                        <span>Number of Toddlers</span>
                                    </div> */}
                                    <div className="dropdown-tod-adu">
                                        <img src={logoDropDown} />
                                    </div>
                                    <select className='opsi'>
                                        <option value="" className='pilihan-tod' disabled selected hidden>Number of Toddlers</option>
                                        {numToddlers.map((val, key) => {
                                            return (
                                                <option className='pilihan-tod' key={key}>{val.label} Toddler(s)</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="adult-kotak">
                                    <div className="gambar-adu">
                                        <img src={inputAdultNum} />
                                    </div>
                                    {/* <div className={actvTextAdu ? "text-adu" : "hide"}>
                                        <span>Number of Adults</span>
                                    </div> */}
                                    <div className="dropdown-tod-adu">
                                        <img src={logoDropDown} />
                                    </div>
                                    <select className='opsi'>
                                        <option value="" className='pilihan-tod' disabled selected hidden>Number of Adults</option>
                                        {numAdults.map((val, key) => {
                                            return (
                                                <option className='pilihan-tod' key={key}>{val.label} Adult(s)</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="baris-keempat">
                                <div>
                                    <input type='text' placeholder='Message' pattern='^[A-Za-z0-9]$' />
                                </div>
                                <div>
                                    <input type='email' placeholder='Email' required />
                                </div>
                            </div>
                            <div className="btn-onlnreserva">
                                <button className='btn-onlnreserva' onClick={isValid}>
                                    BOOK A TABLE
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="diskon-reserva">
                        <div className="judul-spcl-onln">
                            <span className='kecil-spcl'>Special Dine In</span>
                            <span className='besar-spcl'>Christmas Deal!</span>
                        </div>
                        <div className="gmbr-diskon">
                            <img src={diskonIMG} />
                        </div>
                        <div className="list-onlnreserva">
                            <span><b>+ </b>Joyful Discounts</span>
                            <span><b>+ </b>Festive Feasts</span>
                            <span><b>+ </b>Seasonal Offers</span>
                        </div>
                        <div className="btn-onlnreserva-diskon">
                            <div className='kotak-only-decem'>
                                <span>SUBSCRIBE FOR MORE</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OnlineReservation;