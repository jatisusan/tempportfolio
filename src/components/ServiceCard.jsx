
const ServiceCard = ({icon, title}) => {
  return (
    <div className="service-card">
        <img src={icon} alt="" />

        <p>{title}</p>
    </div>
  )
}

export default ServiceCard