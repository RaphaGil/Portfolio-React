import React, { useState } from 'react';

const ContactForm = () => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
  <div style={{ padding: '10px', }}> {/* Corrected syntax */}
    <label style={{padding: '10px'}}htmlFor="name">Name:</label>
    <input  style={{ width: '50%'}}
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      required
    />
  </div>
  <div style={{ padding: '10px',  margin: '10px' }}>
    <label style={{padding: '10px'}} htmlFor="email">Email:</label>
    <input style={{ width: '50%'}}
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
    />
  </div>
  <div style={{ padding: '10px', margin: '10px' }}>
    <label style={{padding: '10px'}} htmlFor="message">Message:</label>
    <textarea style={{ width: '80%', height: '30%'}}
      id="message"
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      required
    />
  </div>
  <button type="submit" style={{ margin: "5px", color: '#fec6c2', backgroundColor: '#ea5555', border: '0px' }} className="btn btn-primary">Submit</button>
</form>

  );
};

export default ContactForm;
