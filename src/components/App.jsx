import React from "react";
import contacts from "../contacts";
import Heading from "./Heading";
import Cards from "./Cards";

function createCard(contact) {
  return (
    <Cards
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      {contacts.map(createCard)}
      {/* <Cards {...contacts[0]} />
      <Cards {...contacts[1]} />
      <Cards {...contacts[2]} /> */}
    </div>
  );
}

export default App;
