import { useRef, useState } from "react";
import "./App.css";
// import custom joke hook
import useRandomJoke from "./useRandomJoke";

function App() {
  // define ref
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  // define variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // call generate joke random hook
  const joke = useRandomJoke(firstName, lastName);

  // on click of generate button
  const generate = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <h1>Generate Ranbdom Joke</h1>
      <p>{joke}</p>
      <form>
        <input type="text" placeholder="First Name" ref={firstNameRef} />
        <input type="text" placeholder="Last Name" ref={lastNameRef} />
        <button onClick={generate}>Generate</button>
      </form>
    </div>
  );
}

export default App;
