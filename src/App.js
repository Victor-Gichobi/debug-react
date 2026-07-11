import React, { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [person, setPerson] = useState({
    name: "Victor",
    age: 20,
    profession: "Software Developer"
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Debugging Demo</h1>

      <Profile person={person} />

      <button
        onClick={() =>
          setPerson({
            ...person,
            age: person.age + 1,
          })
        }
      >
        Increase Age
      </button>
    </div>
  );
}

export default App;