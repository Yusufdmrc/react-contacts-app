import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: "Mehmet",
      phoneNumber: "123123",
    },
    {
      name: "Ayşe",
      phoneNumber: "456457",
    },
    {
      name: "Nazlı",
      phoneNumber: "98765",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <Form contacts={contacts} addContact={setContacts} />
      <List contacts={contacts} />
    </div>
  );
}

export default Contacts;
