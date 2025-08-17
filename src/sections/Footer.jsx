import { IoIosCall, IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <section>
      <div className="footer-top">
        <p>Hire me for your projects</p>
        <button style={{ backgroundColor: "#FA7E23"}}>
          Call Now
        </button>
      </div>

      <div className="footer-bottom">
        <div className="footer-icons">
          <div>
            <MdLocationOn size={22} />
          </div>
          <div>
            <IoIosCall size={22} />
          </div>
          <div>
            <IoMdMail size={22} />
          </div>
        </div>

        <p>2025 All Rights Reserved. Design by John Doe</p>
      </div>
    </section>
  );
};

export default Footer;
