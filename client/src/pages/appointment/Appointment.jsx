import React, { useState } from "react";
import "./Appointment.css";
import axios from "axios";
import { Base_url } from "../../config";
import toast from "react-hot-toast";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    service_type: "",
    state: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${Base_url}/appointment/get-appointment`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      if (data.success) {
        toast.success("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          city: "",
          service_type: "",
          state: "",
          address: "",
        });
        setSuccessMessage("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment">
      <div className="left-section">
        <img src={"images/service.jpeg"} alt="Appointment" />
        <img src={"images/bookService.jpg"} alt="Appointment" />
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit} className="appointment-form">
          <h2>Book a Service</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Phone No:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Service Type:
            <select
              name="service_type"
              value={formData.service_type}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Service Type</option>
              <option value="Daily Living Assistance">
                Daily Living Assistance
              </option>
              <option value="Healthcare Services">Healthcare Services</option>
              <option value="Health Monitoring and Checkups">
                Health Monitoring and Checkups
              </option>
              <option value="Social Engagement and Mental Well-Being">
                Social Engagement and Mental Well-Being
              </option>
              <option value="Convenience Services">Convenience Services</option>
              <option value="Safety and Emergency Response">
                Safety and Emergency Response
              </option>
            </select>
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Get Service"}
          </button>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Appointment;
