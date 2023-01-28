// src/App.js
import "./App.css";
import "./App.css";
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  //função para add um contacto random
  function addRandom() {
    const newRandom =
      contactsList[Math.floor(Math.random() * contactsList.length)];

    if (!contacts.includes(newRandom)) {
      setContacts([newRandom, ...contacts]);
    }
  }
  //função para ordenar por popularidade
  function sortByPopularity() {
    const newContacts = [...contacts];

    newContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContacts(newContacts);
  }
  //função para ordenar por nome
  function sortByName() {
    const newContacts = [...contacts];

    newContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setContacts(newContacts);
  }

  //função para apagar contacto
  function handleDeleteContact(contactId) {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h1>Iron COntacts</h1>
      <button onClick={addRandom}> Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr key={contacts.id} className="table">
                <td>
                  <img src={contacts.pictureUrl} alt={contacts.name} />
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
                <td>{contacts.wonOscar ? "🏆" : ""}</td>
                <td>{contacts.wonEmmy ? "*" : ""}</td>
                <td>
                  <button onClick={() => handleDeleteContact(contacts.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
