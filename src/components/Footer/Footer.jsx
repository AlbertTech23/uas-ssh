import './StyleFooter.css';
import logo from '../../assets/gambar/SSH_-_LOGO 1.png';
import lokasi from '../../assets/gambar/lokasi.png';
import telp from '../../assets/gambar/telp.png';
import add from '../../assets/gambar/add.png';
import ig from '../../assets/gambar/ig.png';
import fb from '../../assets/gambar/fb.png';
import tiktok from '../../assets/gambar/tiktok.png';
import wa from '../../assets/gambar/wa.png';

function Footer() {
  return (

    <div className="footer">

      <div className="foot-1">
        <div className="text-1">
          <p>Contacts</p>
        </div>
        <div className="list-kontak">
          <div className="lis">
            <img className="gambar-logo" src={lokasi} />
            <li>Jl. Graha Boulevard No. 23</li>
          </div>
          <div className="lis">
            <img className="gambar-logo" src={telp} />
            <li>+62 1234543210</li>
          </div>
          <div className="lis">
            <img className="gambar-logo" src={add} />
            <li>sumatrasizzleh@gmail.com</li>
          </div>
        </div>
      </div>

      <div>
        <div className="foot2">
          <div>
            <img className="image-2" src={logo} />
          </div>
          <div>
            <p className="text-2">Whisper to us about your feelings, and we will prepare what you need.</p>
          </div>
          <div className='gambar2'>
            <img className="gambar-logo-2" src={ig} />
            <img className="gambar-logo-2" src={fb} />
            <img className="gambar-logo-2" src={wa} />
            <img className="gambar-logo-2" src={tiktok} />
          </div>
        </div>
      </div>

      <div>
        <div className="foot-3">
          <h4>Working Hours</h4>
          <div className="text-3">
            <div className="day">
              <li className="atas">Mon - Thu</li>
              <li className="atas">Fri</li>
              <li className="atas">Sat - Sun</li>
            </div>
            <div className="time">
              <li className="atas">09.30 - 23.00</li>
              <li className="atas">09.00 - 23.00</li>
              <li className="atas">08.00 - 23.00</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;