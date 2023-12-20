import "../Carousel/StyleCarousel.css";
import { image } from "./data";
import kiri from "../../assets/gambar/left.png";
import kanan from "../../assets/gambar/right.png";
import { useState } from "react";

function Carousel() {
    const [idImage, setIdImage] = useState(0)
    const [arah, setArah] = useState(0)

    const styleBGR = {
        backgroundImage: `url(${image[idImage === 0 ? 0 : idImage - 1].images})`,
    }

    const styleBGL = {
        backgroundImage: `url(${image[idImage === image.length - 1 ? image.length - 1 : idImage + 1].images})`,
    }

    const setL = () => {
        if (idImage === 0) {
            setIdImage(0);
        } else {
            setIdImage(idImage - 1)
        }
        setArah(1)
    }

    const setR = () => {
        if (idImage === image.length - 1) {
            setIdImage(image.length - 1);
        } else {
            setIdImage(idImage + 1)
        }
        setArah(0)
    }

    const setIndikator = (num) => {
        setIdImage(num)
        if (arah === 1) {
            styleBGL
        } else {
            styleBGR
        }
    }

    return (
        <div className="contain" style={arah === 0 ? styleBGR : styleBGL}>
            {image.map((val, indx) => {
                return (
                    <div className="bg-image" >
                        <div className={idImage === indx ? arah === 0 ? "gambar slide-r" : "gambar slide-l" : "gambar hidden"} key={indx}>
                            <img src={val.images} />
                        </div>
                        <div className={idImage === indx ? arah === 0 ? "text slide-r" : "text slide-l" : "text hidden"}>
                            <h1>{val.nama}</h1>
                            <span className="coba-para">{val.desk}</span>
                            <button type="button" className="btn1hero">
                                <span>{val.btnName}</span>
                            </button>
                        </div>
                    </div>
                )
            })}

            <span className="indicators">
                {image.map((_, indx) => {
                    return (
                        <button key={indx} onClick={() => (indx <= image.length - 1 && indx >= 0) ? setIndikator(indx) : setIndikator(0)} className={idImage === indx ? "indicator" : "indicator notactv"} ><span>s</span></button>
                    )
                })}
            </span>

            <div className="kiri">
                <img src={kiri} onClick={() => setL()} />
            </div>
            <div className="kanan">
                <img src={kanan} onClick={() => setR()} />
            </div>
        </div>
    );
}

export default Carousel;
