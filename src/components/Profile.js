import React from "react";

function Profile({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Profession: {person.profession}</p>
    </div>
  );
}

export default Profile;