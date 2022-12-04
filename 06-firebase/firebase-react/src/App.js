import { db } from './api/firebase'
import { collection, getDocs, addDoc, onSnapshot, doc , deleteDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { async } from '@firebase/util'

export const App = () => {
  const [actors, setActors] = useState([])

  const actorsCollection = collection(db, 'actors')


  const getActors = () => {
    
  onSnapshot(actorsCollection,querySnapshot => {
    const actors = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log(actors)
    setActors(actors)
  })
}


  useEffect(() => {
    getActors()
  }, [])

  const addActor = (e) => {
    e.preventDefault()
    const{firstName, lastName, age} = e.target
    console.log(firstName.value)

    addDoc(actorsCollection, {
      name: firstName.value,
      last_name: lastName.value,
      age: age.value
    })
    e.target.reset()

  }

  const deleteActor = async (e)=>  {
     await deleteDoc(doc(db, "actors", e.target.id));
  }

  return (
    <>
    <div>
      <h2> dodawanie aktorow</h2>
      <form onSubmit={addActor}>
        <label htmlFor='firstName'>First name</label><input id='firstName' type='text' />
        <label htmlFor='lastName'>Last name</label><input id='lastName' type='text' />
        <label htmlFor='age'>Age</label><input id='age' type='number' />
        <button type='submit'>Add actor</button>
      </form>
    </div>
    <ul>
      {actors.map(({ id, name, last_name, age }) => (
        <li key={id}>
          <p>Imię: {name}</p>
          <p>Nazwisko: {last_name}</p>
          <p>Wiek: {age}</p>
          <button onClick={deleteActor} id={id}>delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}
