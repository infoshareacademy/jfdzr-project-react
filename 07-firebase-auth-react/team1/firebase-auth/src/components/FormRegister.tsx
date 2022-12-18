import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Stack from '@mui/material/Stack';

export interface Props {
  name: string;
}



function FormRegister (props: Props) { 



  const handleRegister = () => {

    // const { email, password } = getFormData(e);
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((jwt) => {
    //     e.target.reset();
    //     console.log(jwt);
    //     signOut(auth);
    //   })
    //   .catch((e) => {
    //     console.dir(e);
    //     alert(firebaseErrors[e.code]);
    //   });
  }
    return(
      <>
        <TextField id="outlined-basic" label="Username" variant="outlined" /><br/><br/><br/>
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      /><br/><br/>
      <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary" >
        <Fingerprint /> {props.name}
      </IconButton>
     
    </Stack>
      </>
    )
}

export default FormRegister