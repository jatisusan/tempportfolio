import React from "react";
import CommonTitle from "../components/CommonTitle";
import { services } from "../../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="services-container">
      <CommonTitle first={"My"} second={"Services"} position={"left"} />

      <div className="services-content">
        {services.map((item, i) => (
          <ServiceCard key={i} icon={item.icon} title={item.title} />
        ))}
      </div>

      <div className="btn-div">
        <button>Read more</button>
      </div>
    </section>
  );
};

export default Services;
