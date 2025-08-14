import { blogCards } from "../../constants";
import CommonTitle from "../components/CommonTitle";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-bg">
        <img src="/code-bg.jpg" alt="" />
      </div>

      <div className="blog-content">
        <CommonTitle
          first={"My"}
          second={"Blog"}
          position={"center"}
          color={"white"}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quia.
        </p>

        <div className="blog-cards">
          {blogCards.map((item, i) => (
            <div key={i} className="blog-card-item">
              <div
                className="blog-card-img"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="blog-card-date">
                  <span>{item.date}</span>
                </div>

                <div className="blog-card-title">
                  <p>{item.title}</p>
                </div>
              </div>

              <div className="blog-card-content">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="btn-div">
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
