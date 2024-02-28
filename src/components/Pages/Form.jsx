import React, { useState } from "react";
const ContactForm = () => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    email: "",
    exampleSelect: "",
    exampleMultipleSelect: [],
    exampleTextarea: ""
  });

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
      email: "",
      exampleSelect: "",
      exampleMultipleSelect: [],
      exampleTextarea: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "left" }}>
  <div className="form-group" style={{minWidth: '80%'}}>
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
  <div className="form-group" style={{minWidth: '80%'}}>
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
  <div className="form-group" style={{minWidth: '80%'}}>
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
  <button type="submit" className="btn" style={{ marginTop: '15px', color: '#fec6c2', backgroundColor: '#ea5555', border: '0px' }}>Submit</button>
</form>

  );
};

export default ContactForm;
