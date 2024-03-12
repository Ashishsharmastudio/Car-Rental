// HeroSection.js
import React, { useState } from "react";
import Banner from "../../assets/banner.png";

const HeroSection = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleClick = (formType) => {
    setSelectedForm(formType);

    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('.car-rental-form button');
    buttons.forEach(button => button.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    const selectedButton = document.querySelector(`.${formType}-button`);
    selectedButton.classList.add('selected');
  };

  return (
    <div className="heroSection">
      <img src={Banner} alt="banner" className="bg-img" />
      <h1 className="hero-text">
        INDIA'S LEADING ONE-WAY INTER-CITY SERVICE PROVIDER
      </h1>
      <section className="car-rental-form">
        <button className={`first-button${selectedForm === 'outstation' ? ' selected' : ''}`} onClick={() => handleClick('outstation')}>OutStation</button>
        <button className={`second-button${selectedForm === 'local' ? ' selected' : ''}`} onClick={() => handleClick('local')}>Local</button>
        <button className={`third-button${selectedForm === 'airport' ? ' selected' : ''}`} onClick={() => handleClick('airport')}>Airport</button>
      </section>
      {selectedForm && (
        <ContactForm formType={selectedForm} />
      )}
    </div>
  );
};

const ContactForm = ({ formType }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    pickupDate: "",
    pickupAt: "",
    trip: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" style={{ display: formType === 'show' ? 'block' : 'none' }}>
      <div>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
          required
        />
      </div>
      {formType === 'outstation' && (
        <>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pickupDate">Pickup Date:</label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pickupAt">Pickup At:</label>
            <input
              type="text"
              id="pickupAt"
              name="pickupAt"
              value={formData.pickupAt}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
      {(formType === 'local' || formType === 'airport') && (
        <>
          <div>
            <label htmlFor="pickupDate">Pickup Date:</label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pickupAt">Pickup At:</label>
            <input
              type="text"
              id="pickupAt"
              name="pickupAt"
              value={formData.pickupAt}
              onChange={handleChange}
              required
            />
          </div>
          {formType === 'airport' && (
            <div>
              <label htmlFor="trip">Trip:</label>
              <input
                type="text"
                id="trip"
                name="trip"
                value={formData.trip}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </>
      )}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default HeroSection;
