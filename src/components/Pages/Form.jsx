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
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "left", fontSize: '18px'}}>
      <div className="form-group" style={{ minWidth: '80%', marginBottom: '10px' }}>
        <input
          type="name"
          className="form-control"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Add box-shadow style here
            padding: "10px", // Add padding for better visual appearance
            borderRadius: "5px", // Add border-radius for rounded corners
          }}
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group" style={{ minWidth: '80%' ,marginBottom: '10px'}}>
        <input
          type="email"
          className="form-control"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Add box-shadow style here
            padding: "10px", // Add padding for better visual appearance
            borderRadius: "5px", // Add border-radius for rounded corners
          }}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group" style={{ minWidth: '80%' }}>
        <textarea
          className="form-control"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Add box-shadow style here
            padding: "10px", // Add padding for better visual appearance
            borderRadius: "5px", // Add border-radius for rounded corners
          }}
          id="exampleTextarea"
          name="exampleTextarea"
          rows="3"
          value={formData.exampleTextarea}
          onChange={handleInputChange}
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn"
        style={{
          marginTop: '15px',
          color: isHovered? 'white': '#fec6c2',
          backgroundColor: '#ea5555',
          paddingRight: '30px',
          border: '0px',
          transition: '0.3s', // Add transition for smooth hover effect
          cursor: 'pointer', // Change cursor to pointer on hover
          position: 'relative',
          opacity: isHovered? '.5' :'1'
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
