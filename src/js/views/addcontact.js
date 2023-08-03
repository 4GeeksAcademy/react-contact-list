import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Update import statement
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate(); // Update to useNavigate
  const [contact, setContact] = useState({
    name: "",
    username: "",
    email: ""
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    actions.createContact(contact);
    navigate("/demo"); 
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={contact.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Add Contact</button>
    </div>
  );
};
