import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  const handleDelete = (contactId) => {
    actions.deleteContact(contactId);
  };

  return (
    <div className="container">
      <ul className="list-group">
        {store.contacts.map((contact) => {
          return (
            <li key={contact.id} className="list-group-item d-flex justify-content-between">
              <Link to={`/single/${contact.id}`}>
                <span>{contact.name}</span>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/add">
        <button className="btn btn-primary">Add Contact</button>
      </Link>
    </div>
  );
};
