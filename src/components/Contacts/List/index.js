import { useState } from "react";

function List({ contacts }) {
  const [list, setList] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(list.toLocaleLowerCase())
    );
  });

  console.log("fitered", filtered);

  return (
    <div>
      <input
        placeholder="Filter Contacts"
        value={list}
        onChange={(e) => setList(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contacts, i) => (
          <li key={i}>
            <span>{contacts.name}</span>
            <span>{contacts.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts:{filtered.length}</p>
    </div>
  );
}

export default List;
