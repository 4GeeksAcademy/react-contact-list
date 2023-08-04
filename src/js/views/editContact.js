import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  
  const { theid } = useParams(); // get the contact id from the URL parameters

  const [contact, setContact] = useState({
    name: "",
    username: "",
    email: ""
  });

  // Load the contact to edit when the component mounts
  useEffect(() => {
    const contactToEdit = store.contacts.find(contact => contact.id === parseInt(theid));
    setContact(contactToEdit || { name: "", username: "", email: "" }); 
  }, [store.contacts, theid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    actions.updateContact(theid, contact);
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
      <button className="btn btn-primary" onClick={handleSubmit}>Update Contact</button>
    </div>
  );
};
