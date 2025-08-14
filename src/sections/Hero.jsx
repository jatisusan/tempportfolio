import { MdOutlinePlayArrow } from "react-icons/md";
import { socialLinks } from "../../constants";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-bg">
        <div className="hero-content">
          <Navbar />

          <div className="hero-text">
            <div>
              <p>Hello, I'm</p>
              <p>John Doe</p>
              <h1>UI/UX Designer</h1>
            </div>

            <img src="/heroimg.png" alt="" className="hero-img" />

            <div className="social-links">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.link} className="social-links-item">
                  <img src={item.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="play-btn-wrapper">
        <div className="play-btn-bg"></div>
        <div className="play-btn">
          <MdOutlinePlayArrow color="#f8ca29" size={38} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
