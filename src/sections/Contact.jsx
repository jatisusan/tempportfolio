import CommonTitle from "../components/CommonTitle";

const Contact = () => {
  return (
    <div className="contact-container">
      <CommonTitle first={"My"} second={"Contact"} position={"center"} />

      <form className="contact-form">
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="phone" placeholder="Your message" />
        <textarea name="message" placeholder="Your message" />

        <button style={{ backgroundColor: "#FA7E23", marginTop: "2rem" }}>
          Send Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
