import React from "react";
import "./AllServices.css";
import SubscriptionPlans from "../subscription-plans/SubscriptionPlans SubscriptionPlans";

const AllServices = () => {
  // const services = [
  //   {
  //     title: "Personal Care and Nursing",
  //     description:
  //       "Experienced caregivers provide personalized assistance with daily activities, such as bathing, dressing, and medication management, ensuring comfort and dignity.",
  //   },
  //   {
  //     title: "Doctor Consultation and Home Visits",
  //     description:
  //       "Access to qualified doctors for online consultations or in-person visits at home, allowing for convenient and personalized medical care.",
  //   },
  //   {
  //     title: "Emergency Medical Services",
  //     description:
  //       "Prompt and reliable emergency response system, ensuring timely medical attention for urgent situations, providing peace of mind for both elders and families.",
  //   },
  //   {
  //     title: "Socializing Events and Activities",
  //     description:
  //       "Organized social activities and events to promote social interaction, combat loneliness, and enhance cognitive well-being, creating a sense of community and purpose.",
  //   },
  //   {
  //     title: "Home Services",
  //     description:
  //       "Professional cleaning, cooking, and maid services for a comfortable and well-maintained living environment, freeing elders from household chores.",
  //   },
  //   {
  //     title: "24/7 Care and Health Monitoring",
  //     description:
  //       "Round-the-clock personal caretakers and regular health checkups to ensure continuous monitoring, early intervention, and prompt medical attention.",
  //   },
  //   {
  //     title: "Grocery and Pharmacy Services",
  //     description:
  //       "Convenient access to monthly grocery supplies and pharmacy needs delivered directly to their doorstep, simplifying daily tasks and reducing stress.",
  //   },
  //   {
  //     title: "Scheduled Appointments and Reminders",
  //     description:
  //       "Personalized scheduling and reminders for appointments, medication schedules, and important events, ensuring adherence to routines and reducing forgetfulness.",
  //   },
  // ];

  const allServices = [
    {
      category: "Healthcare Services",
      subcategories: [
        "Virtual Consultations with Doctors",
        ["General Medicine", "Specialist Consultations"],
        "Nursing Services",
        ["Post-Surgical Care", "Chronic Disease Management", "Wound Care"],
        "Physiotherapy",
        ["Rehabilitation Exercises", "Pain Management"],
        "Emergency Medical Services",
        ["Rapid Response Teams", "Ambulance Services"],
      ],
    },
    {
      category: "Personal Care Services",
      subcategories: [
        "Personal Hygiene Assistance",
        ["Bathing and Grooming", "Dressing Assistance"],
        "Mobility Assistance",
        ["Help with Walking", "Transfer Support"],
        "Medication Management",
        ["Medication Reminders", "Administration of Medicines"],
      ],
    },
    {
      category: "Home Services",
      subcategories: [
        "Cook Services",
        ["Meal Preparation", "Dietary Planning"],
        "Cleaning Services",
        ["Housekeeping", "Laundry"],
        "Maid Services",
        ["Weekly Cleaning", "Monthly Deep Cleaning"],
      ],
    },
    {
      category: "24/7 Care Services",
      subcategories: [
        "Live-In Caretaker",
        ["Continuous Support", "Companionship"],
      ],
    },
    {
      category: "Health Monitoring",
      subcategories: [
        "Monthly Health Checkups at Home",
        "Quarterly Hospital Checkups (if needed)",
        "Regular Health Monitoring and Updates",
      ],
    },
    {
      category: "Social Engagement",
      subcategories: [
        "Regular Socializing Events",
        ["Group Activities", "Community Gatherings"],
        "Virtual Gatherings",
        ["Online Discussions", "Interest-Based Groups"],
      ],
    },
    {
      category: "Support Services",
      subcategories: [
        "Assistance for Hospital Visits",
        ["Transportation Support", "Appointment Coordination"],
        "Monthly Grocery Supplies",
        ["Delivery Services", "Essential Items"],
      ],
    },
    {
      category: "Safety Features",
      subcategories: [
        "Panic Button",
        ["Immediate Assistance", "Emergency Alerts"],
        "GPS Tracking for Dementia Patients",
        ["Location Monitoring", "Safety Assurance"],
      ],
    },
  ];

  return (
    <div className="all-services">
      <div className="desc">
        <h1>Available Services</h1>
      </div>
      <div className="all-services-container">
        {/* {services.map((service, index) => (
          <div className="all-services-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))} */}

        {allServices.map((service, index) => (
          <ServiceCard
            key={index}
            category={service.category}
            subcategories={service.subcategories}
          />
        ))}
      </div>

      <div className="service-plan">
        <div className="plan-desc">
          <h1>Choose Your Plan</h1>
          <p>Embrace Care and Comfort with ElderSerene</p>
        </div>
        <div className="plan">
          <SubscriptionPlans />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ category, subcategories }) => {
  return (
    <div className="all-services-card">
      <h3>{category}</h3>
      <ul>
        {subcategories.map((subcategory, index) =>
          Array.isArray(subcategory) ? (
            subcategory.map((item, subIndex) => <li key={subIndex}>{item}</li>)
          ) : (
            <li key={index}>{subcategory}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default AllServices;
