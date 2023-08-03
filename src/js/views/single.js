import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const contact = store.contacts.find(contact => contact.id === parseInt(params.theid));

  return (
    <div className="jumbotron">
      {contact ? (
        <div>
          <h1 className="display-4">{contact.name}</h1>
          <p>Username: {contact.username}</p>
          <p>Email: {contact.email}</p>
        </div>
      ) : (
        <h1 className="display-4">Contact not found</h1>
      )}

      <hr className="my-4" />
      <Link to="/demo">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
