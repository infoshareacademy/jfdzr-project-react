import db from "./Api/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [actors, setActors] = useState([]);
  const actorsCollection = collection(db, "Actors");

  const getActors = () => {
    getDocs(actorsCollection).then((querySnapshot) => {
      // console.log(querySnapshot);
      const actors = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(actors);
      setActors(actors);
    });
  };

  const handleSubmit = (e) => {
    e.preventDafault();

    const { firstName, lastName, age } = e.target;

    const actor = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
    };

    addDoc(actorsCollection, actor).then(() => {
      getActors().then((actors) => setActors(actors));
      e.target.reset();
    });
  };
  useEffect(() => {
    getActors();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Podaj imię:</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Podaj nazwisko:</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div>
          <label htmlFor="age">Podaj wiek:</label>
          <input type="number" name="age" id="age" />
        </div>
        <button>Dodaj aktora</button>
      </form>
      <ul>
        {actors.map(({ id, firstName, lastName, age }) => (
          <li key={id}>
            <p>Imię: {firstName}</p>
            <p>Nazwisko: {lastName}</p>
            <p>Wiek: {age}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
