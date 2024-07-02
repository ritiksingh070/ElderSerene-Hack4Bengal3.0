import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
 
  return (
    <div className="hero">
      <div className="hero-first">
        <div className="left-section">
          <h1>Welcome to ElderSerene,Kolkata</h1>
          <p>
          Ensuring Well-Being and Happiness for Your Loved Ones in Kolkata with Compassionate and Comprehensive Elder Care. ElderSerene's dedicated team supports every need with unmatched care and professionalism, making life better for your elders.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right-section">
          <img src={"images/rightSection.jpg"} alt="Eldercare Services" />
        </div>
      </div>
      <div className="hero-sec">
        <div className="card-grid">
          <div className="card">
            <img src={"images/healthCare.jpg"} alt="Health Care" />
            <h3>Health Care</h3>
            <p>
              Our health care services include regular check-ups, medication management, and emergency support to keep your loved ones healthy and safe.
            </p>
          </div>
          <div className="card">
            <img src={"images/homeAssistant.jpeg"} alt="Home Assistance" />
            <h3>Home Assistance</h3>
            <p>
              We offer home assistance services to help with daily activities, ensuring a comfortable and stress-free environment for your elders.
            </p>
          </div>
          <div className="card">
            <img src={"images/socialEngagement.jpg"} alt="Social Engagement" />
            <h3>Social Engagement</h3>
            <p>
              Our programs focus on social engagement and recreational activities to keep your elders mentally active and socially connected.
            </p>
          </div>
          <div className="card">
            <img src={"images/24x7logo.avif"} alt="24/7 Support" />
            <h3>24x7 Support</h3>
            <p>
              We provide 24x7 support to address any immediate needs and ensure peace of mind for both the elders and their families.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
