import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Stack from '@mui/material/Stack';

import { signInWithEmailAndPassword, signOut } from "firebase/auth";


import { useState } from 'react';
import { auth } from '../api/firebase';



export interface Props {
  name: string;
}



function FormLogin (props: Props) { 

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        resetState()
        console.log(jwt);
        signOut(auth);
      })
      .catch((e) => {
        console.dir(e);
        alert();
      });
    }

    const resetState = () => {
      setEmail("") 
      setPassword("") 
      
    }

    const handlePasswordChange = (e:any) => {
      console.log(e)
    }

    const handleLoginChange = (e:any) => {
      console.log(e)
    }
    
    return(
      <>
        <TextField id="outlined-basic" label="Username" onChange={handleLoginChange} variant="outlined" /><br/><br/><br/>
        <TextField
        name='password'
        onChange={handlePasswordChange}
        value={password}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      /><br/><br/>
      <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary" onSubmit={handleLogin} >
        <Fingerprint /> {props.name}
      </IconButton>
     
    </Stack>
      </>
    )
}

export default FormLogin