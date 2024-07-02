import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-first">
        <h1 className="about-title">
          ElderSerene: Empowering Elders, Enriching Lives
        </h1>
        <p>
          Welcome to ElderSerene – your trusted partner in providing
          comprehensive, compassionate, and personalized care solutions for
          seniors. We understand the unique challenges that come with aging and
          are dedicated to enhancing the quality of life for our elders by
          offering a wide range of services designed to meet their individual
          needs.
        </p>
      </div>
      <div className="aboutMainImage">
        <div>
          <img src={"images/aboutmain.jpeg"} alt="" />
        </div>
      </div>

      <div className="about-second">
        <div className="about-second-left">
          <div>
            <p>
              At ElderSerene, we offer comprehensive elder care services,
              including virtual doctor consultations, nursing, physiotherapy,
              and personal care. We support daily activities with dedicated
              caretakers, provide emergency medical services, and ensure
              well-being with regular health checkups and grocery supplies.
              Through regular social events, we foster engagement and community.
              Our commitment to affordability, safety, and personalized care
              enhances the lives of our elders.
            </p>
          </div>
          <div className="about-service">
            <div>
              <img src={"images/247Logo.jpeg"} alt="sth" />
              <h2>24x7 Support</h2>
            </div>
            <div>
              <img src={"images/trusted.jpg"} alt="sth" />
              <h2>Trusted Care Managers</h2>
            </div>
            <div>
              <img src={"images/personalized.jpeg"} alt="sth" />
              <h2>Personalised Service</h2>
            </div>
            <div>
              <img src={"images/care.jpg"} alt="sth" />
              <h2>Complete Care</h2>
            </div>
          </div>
        </div>
        <div className="about-second-right">
          <iframe
            width="450"
            height="250"
            src="https://www.youtube.com/embed/wS0SS2eeYP8"
            title="Geriatric Care@home"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="our-mission">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At ElderSerene, our mission is to empower seniors to age with
            dignity, comfort, and joy. We are dedicated to providing holistic
            care that addresses not only the medical but also the emotional and
            social needs of our elders. We strive to create an environment where
            seniors feel valued, respected, and connected. Through our
            innovative and tailored care solutions, we aim to alleviate the
            concerns of families, offering peace of mind by ensuring their loved
            ones are in compassionate and capable hands. Our mission is to make
            high-quality elder care accessible and affordable, improving the
            quality of life for seniors across India.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to redefine elder care by setting new standards of
            excellence, compassion, and innovation. We envision a world where
            every senior can live a fulfilling and independent life, with access
            to comprehensive care that supports their physical, emotional, and
            social well-being. As a leader in elder care, we aim to continuously
            evolve and expand our services to meet the growing and changing
            needs of the elderly population. We are committed to fostering a
            supportive and inclusive community for seniors, where they can
            thrive and stay connected. Through our efforts, we seek to build a
            society that values and uplifts its elders, ensuring they live their
            golden years with dignity and joy.
          </p>
        </div>
      </div>
      {/* <div className="about-second">
        <div className="about-second-left">
          <img src="https://via.placeholder.com/500" alt="" />
        </div>
        <div className="about-second-right">
          <p>Our Founder</p>
          <h1 className="about-title">About</h1>

          <ul className="we-provide">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, asperiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, asperiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, asperiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, asperiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, asperiores.
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default About;
