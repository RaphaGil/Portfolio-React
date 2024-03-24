import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

const ContactForm = () => {
  // Initialize state for form fields and hover state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    exampleTextarea: ""
  });
  const [isHovered, setIsHovered] = useState(false);

  // Update form field state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or perform other actions
    console.log(formData);
    // Optionally, reset form fields after submission
    setFormData({
      name: "",
      email: "",
      exampleTextarea: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "left" }}>
      <div className="form-group" style={{ minWidth: '80%' }}>
        <label htmlFor="name">Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group" style={{ minWidth: '80%' }}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group" style={{ minWidth: '80%' }}>
        <label htmlFor="exampleTextarea">Your Message</label>
        <textarea
          className="form-control"
          id="exampleTextarea"
          name="exampleTextarea"
          rows="3"
          value={formData.exampleTextarea}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn"
        style={{
          marginTop: '15px',
          color: '#fec6c2',
          backgroundColor: '#ea5555',
          paddingRight: '30px',
          border: '0px',
          transition: 'background-color 0.3s', // Add transition for smooth hover effect
          cursor: 'pointer', // Change cursor to pointer on hover
          position: 'relative' // Add position relative for absolute positioning of the arrow
        }}
        onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
      >
        Submit
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{
            position: 'relative',
            right: isHovered ? '-15px' : '-10', // Move arrow to the right when hovered
            transition: 'right 0.3s' // Add transition for smooth movement
          }}
        />
      </button>
    </form>
  );
};

export default ContactForm;
