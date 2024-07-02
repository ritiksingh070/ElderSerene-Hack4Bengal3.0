import React from 'react';
import './SubscriptionPlans.css';

const plans = [
  {
    name: "Basic Care",
    services: [
      "Personal Hygiene Assistance",
      "Monthly Health Checkups at Home",
      "Emergency Medical Services"
    ],
    duration: "1 Month",
    price: "10,000",
    features: [
      "Basic Care Support",
      "Health Monitoring",
      "Emergency Assistance"
    ]
  },
  {
    name: "Standard Care",
    services: [
      "All Basic Care Services",
      "Weekly Doctor Consultations (Virtual)",
      "Monthly Grocery Supplies",
      "Regular Socializing Events"
    ],
    duration: "3 Months",
    price: "25,000",
    features: [
      "Comprehensive Care",
      "Social Engagement",
      "Regular Health Checkups"
    ]
  },
  {
    name: "Advanced Care",
    services: [
      "All Standard Care Services",
      "Bi-weekly Physiotherapy Sessions",
      "Cleaning Services (Weekly)",
      "Live-In Caretaker (Part-Time)"
    ],
    duration: "6 Months",
    price: "45,000",
    features: [
      "Advanced Health Support",
      "Personal Caretaker",
      "Home Services"
    ]
  },
  {
    name: "Premium Care",
    services: [
      "All Advanced Care Services",
      "Weekly Doctor Consultations (Home & Virtual)",
      "Cook Services (Daily)",
      "Maid Services (Weekly)",
      "Panic Button"
    ],
    duration: "12 Months",
    price: "80,000",
    features: [
      "Premium Health & Personal Care",
      "24/7 Caretaker Support",
      "Safety & Convenience Features"
    ]
  },
  {
    name: "Personalized",
    services: [
      "Customizable Services Based on Individual Needs",
      "Flexible Scheduling",
      "Full Range of Available Services"
    ],
    duration: "Flexible",
    price: "Varies",
    features: [
      "Tailored Care Solutions",
      "Personalized Support",
      "Full Customization"
    ]
  }
];

const SubscriptionPlans = () => {
  return (
    <div className="subscription-plans">
      <h2>Subscription Plans</h2>
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Services Included</th>
            <th>Duration</th>
            <th>Price (INR)</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index}>
              <td>{plan.name}</td>
              <td>
                <ul>
                  {plan.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              </td>
              <td>{plan.duration}</td>
              <td>{plan.price}</td>
              <td>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionPlans;
