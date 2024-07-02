import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="choose-us">
      <div className="top">
        <h1>Why Choose Us</h1>
        <p>
          At ElderSerene, we are dedicated to providing comprehensive and
          compassionate care solutions tailored to the unique needs of seniors.
          Our wide range of services, from healthcare to personal care, ensures
          that every aspect of elder care is covered. We believe in making
          quality elder care accessible and affordable, enhancing the lives of
          our elders and providing peace of mind to their families.
        </p>
      </div>
      <div className="content">
        <div className="choose-left">
          <h2>Our Unique Features</h2>

          <div className="description">
            <ul>
              <li>Comprehensive Care Services</li>
              <li>Tailored Care Plans</li>
              <li>Cost-Effective Solutions</li>
             
              <li>Health Monitoring</li>
              <li>Community Engagement</li>
              <li>Safety and Peace of Mind</li>
              
              <li>Panic Button Feature</li>
              
              <li>Scheduled Appointments and Reminders</li>
            </ul>
            <button>Read More</button>
          </div>
        </div>
        <div className="choose-right">
          <div className="video-description">
            <div className="video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/wS0SS2eeYP8"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
