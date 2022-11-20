import { useState } from 'react';
import './App.css';
import Box from './Components/Box/Box';

import data from './data.json';

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      {data.map((e)=>{
        return (
          <Box key={e.id}
          company={e.company} 
          logo={e.logo}
          position={e.position}
          tags={e.tools.concat(e.languages)}
          info={
            {contract: e.contract,
             postedAt: e.postedAt,
             location: e.location
            }
          }
          
          
          />)
      })}
    </>
  )
}

export default App
