import { getFormData } from "../../utils/getFormData";
import { Form } from "../Form";
import { auth } from "../../api/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseErrors } from "../../utils/firebaseErrors";

export const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = getFormData(e);
    createUserWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
        signOut(auth);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return <Form submitText="Zarejestruj się" onSubmit={handleRegister} />;
};
