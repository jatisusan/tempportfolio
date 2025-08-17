import { Link } from "react-router-dom";
import { portfolioItems } from "../../constants";
import CommonTitle from "../components/CommonTitle";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-container">
      <CommonTitle first={"My"} second={"Portfolio"} position={"center"} />

      <div className="portfolio-grid">
        {portfolioItems.map((item, i) => (
          <div
            key={i}
            style={{ gridColumn: item.cols }}
            className="portfolio-item"
          >
            <img src={item.img} alt="" />

            <div className="portfolio-item-overlay">
              <button style={{ background: "white", color: "black" }}>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-div">
        <button>
          <Link to={"/portfolio"}>See more</Link>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
