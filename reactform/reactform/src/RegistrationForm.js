import React, { useState } from "react";
import axios from 'axios';

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newData = { name, mobile, city, state };
    await axios.post('http://127.0.0.1:8000/',newData)
    onRegister(newData);
    setName("");
    setMobile("");
    setCity("");
    setState("");
  };
  
  const handleUpdate = (id) => {
    const updatedData = {
      name: name,
      mobile: mobile,
      city: city,
      state: state
    };

    axios.put(`http://localhost:8000/${id}/`, updatedData)
      .then(response => {
        handleSubmit(); // Refresh the data after successful update
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });

  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/${id}/`)
      .then(response => {
        handleSubmit(); // Refresh the data after successful deletion
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
