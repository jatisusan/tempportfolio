import React from "react";
import CommonTitle from "../components/CommonTitle";
import { services } from "../../constants";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services-container">
      <CommonTitle first={"My"} second={"Services"} position={"left"} />

      <div className="services-content">
        {services.map((item, i) => (
          <ServiceCard key={i} icon={item.icon} title={item.title} />
        ))}
      </div>

      <div className="btn-div">
        <button>
          <Link to={'/services'}>Read more</Link>
        </button>
      </div>
    </section>
  );
};

export default Services;
