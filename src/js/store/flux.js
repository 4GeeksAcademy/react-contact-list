const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://jsonplaceholder.typicode.com/users")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }));
			},
			
			createContact: (newContact) => {
				fetch("https://jsonplaceholder.typicode.com/users", {
				  method: "POST",
				  headers: { "Content-Type": "application/json" },
				  body: JSON.stringify(newContact)
				})
				.then(response => response.json())
				.then(data => {
				  const store = getStore();
				  setStore({ contacts: [...store.contacts, data] }); // Append new contact to existing contacts array
				});
			  },
			  
			updateContact: (contactId, updatedContact) => {
				fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`, {
				  method: "PUT",
				  headers: { "Content-Type": "application/json" },
				  body: JSON.stringify(updatedContact)
				})
				.then(response => response.json())
				.then(data => {
				  const store = getStore();
				  const updatedContacts = store.contacts.map(contact =>
					contact.id === parseInt(contactId) ? data : contact // Convert contactId to a number
				  );
				  setStore({ contacts: updatedContacts });
				});
			  },
			  
			deleteContact: contactId => {
				fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`, {
					method: "DELETE"
				})
					.then(() => {
						const store = getStore();
						const updatedContacts = store.contacts.filter(contact => contact.id !== contactId);
						setStore({ contacts: updatedContacts });
					});
			},
		}
	};
};

export default getState;
