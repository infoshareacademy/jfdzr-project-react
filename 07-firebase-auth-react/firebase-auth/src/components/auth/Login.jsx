import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";
import { Form } from "../Form";

export const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = getFormData(e);
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return <Form submitText="Zaloguj się" onSubmit={handleLogin} />;
};
