// const About=()=>
// {
//     return(
//       <div>
//         <h1>About us Page</h1>
//         <p>
//             This is a food ordering application.Which name is FoodVilla.
//             Founded by Shivendra. 
//         </p>
//       </div>
//     );
// };
// export default About;



import React from "react";
import "./About.css"; // Assume we add the styling in a CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro">
        <h1>Welcome to DoorDash!</h1>
        <p>
          We are on a mission to deliver the best food ordering experience to our customers.
          Whether it's your favorite local dish or the trendiest cuisine, we've got you covered.
        </p>
      </section>

      {/* Image Section */}
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1555992336-03a23c218848"
          alt="Food"
        />
      </div>

      {/* Founder Section */}
      <section className="about-founder">
        <h2>Our Founder</h2>
        <p>
          DoorDash was founded by <strong>Shivendra</strong>, with a passion for bringing delicious food to your doorstep with ease and reliability. His vision was to create a platform where food lovers can explore and enjoy a variety of cuisines without any hassle.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At FoodVilla, we strive to provide not only delicious meals but also a seamless ordering experience. Our goal is to empower local restaurants and offer you the best selection of dishes, while ensuring that your food reaches you fast and fresh.
        </p>
        <p>
          With thousands of happy customers and partnerships with some of the top restaurants, we are committed to growing and improving every day.
        </p>
      </section>
    </div>
  );
};

export default About;
