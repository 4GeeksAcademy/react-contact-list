import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store } = useContext(Context);
  const { theid } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const contact = store.contacts.find(contact => contact.id === parseInt(theid));
    setContact(contact);
  }, [store, theid]);

  if (!contact) return <div>Loading...</div>;

  const handleEdit = () => {
    navigate(`/edit/${contact.id}`);
  };

  return (
    <div className="container">
      <h1>{contact.name}</h1>
      <h2>{contact.username}</h2>
      <h3>{contact.email}</h3>
      <button onClick={handleEdit}>Edit Contact</button>
    </div>
  );
};
