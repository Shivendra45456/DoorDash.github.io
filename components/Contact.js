// const Contact=()=>
// {
//     return(
//       <div>
//         <h1>MO no-6260294092</h1>
//         <h1>Mail us-pshivendra1702@gmail.com</h1>
//         <p>
//             This is a food ordering application.
//             Foodvila.
//             Korean mall shilpi plaza.
//         </p>
//       </div>
//     );
// };
// export default Contact;



import React from "react";
import "./Contact.css"; // Import CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Info Section */}
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Get in touch with us for any queries or support.</p>
        
        <div className="contact-details">
          <div className="detail-item">
            <h2>Phone</h2>
            <p><a href="tel:+6260294092">+6260294092</a></p>
          </div>
          <div className="detail-item">
            <h2>Email</h2>
            <p><a href="mailto:pshivendra1702@gmail.com">pshivendra1702@gmail.com</a></p>
          </div>
          <div className="detail-item">
            <h2>Address</h2>
            <p>DLF Mall, Shilpi Plaza, DoorDash Office</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Location Section */}
      <section className="contact-location">
        <h2>Our Location</h2>
        <div className="map">
          {/* You can use Google Maps API here */}
          <iframe
            title="DoorDash Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9021941656283!2d90.39156331543198!3d23.750879694459915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89dfddcb027%3A0x4bc2c4e8d3c0bdbb!2sKorean%20Mall!5e0!3m2!1sen!2sin!4v1614149481522!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
