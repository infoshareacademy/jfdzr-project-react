import './App.css';
import Box from './components/Box/Box';
import Container from './components/Container/Container';
import array from "../src/data.json"                                                                                ;


function App() {
  return(
    <Box>
           <>
        {array.map((item)=>{
            return (
              <Container key={item.id} data={item} />
            )
        })}
       </> 

    </Box>
  )
  ;
}

export default App;



