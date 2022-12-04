import logo from './logo.svg';
import './App.css';
import { collection, getDocs } from 'firebase/firestore'
import db from './Api/firebase';
import {useEffect , useState} from "react";
import { addDoc } from 'firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'

const ActorsList = ({ actors }) => {
  return actors.map((actor) => (
     (
      
      <ul>
        <li>{actor.firstName}</li>
        <li>{actor.lastName}</li>
        <li>{actor.age}</li>
      </ul>
      
      ))
  )
}


function App() {

  const [actors, setActors] = useState([])

  const getActors = () => {
    const actorsCollection = collection(db, 'Actors')
    getDocs(actorsCollection).then(querySnapshot => {
      const actors = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      
      setActors(actors)
    })
  }
    
  console.log(actors)

  useEffect(() => {
    getActors()
  }, []  )


  return (
    <div className="App">
      
        <ActorsList actors={actors}/>
        <ActorsForm />
      
    </div>
  );
}


const ActorsForm = () => {

  function handleSubmit (e) {
    e.preventDefault()
    // e.target.firstName
    console.log(e.target.firstName.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input id='firstName'/>
      <label htmlFor="lastName">Last Name:</label>
      <input id='lastName'/>
      <label htmlFor='age'>Age: </label>
      <input id='age'/>
    <button>Add Actor</button>
    </form>
    </>
  )
}

export default App;


