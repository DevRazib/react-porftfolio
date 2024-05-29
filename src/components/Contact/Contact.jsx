import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h2>Get In Touch </h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's Talk </h3>
          <p>I'm currently availabe to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime  </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mailIcon" /> <p>bdrazib71@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="mailIcon" /> <p>+08801799861507</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="mailIcon" />{" "}
              <p>Sylhet , Bangladesh </p>
            </div>
          </div>
        </div>
        <form action="" className="contact-right">
          <label htmlFor="">Your Name </label>
          <input type="text" placeholder="Enter Your Name" name="name"/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here </label>
          <textarea name="message" rows='8' placeholder="Write your message" id=""></textarea>
          <button className="contact-submit" type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
