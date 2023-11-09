import logo from "./logo.svg";
import "./App.css";
import { db } from "./firebaseConfig";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("Terrance");
  const [lastName, setLastName] = useState("McKenna");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await setDoc(doc(db, "users", firstName), {
      firstName: firstName,
      lastName: lastName,
    });

    console.log("Document writted with ID: ", firstName);
  };

  return (
    <form>
      <div>
        <label> First Name: </label>
        <input onChange={(event) => setFirstName(event.target.value)} />
      </div>
      <div>
        <label> Last Name: </label>
        <input onChange={(event) => setLastName(event.target.value)} />
      </div>

      <button onClick={(event) => handleSubmit(event)}> Submit to DB</button>
    </form>
  );
};

export default App;
