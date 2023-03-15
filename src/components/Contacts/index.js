import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: "Yusuf",
      phoneNumber: "05351111111",
    },
    {
      name: "Nisa",
      phoneNumber: "05352222222",
    },
    {
      name: "Eslem",
      phoneNumber: "05353333333",
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
