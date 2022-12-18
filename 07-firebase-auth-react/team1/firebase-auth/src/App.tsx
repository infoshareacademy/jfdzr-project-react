import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import { Nav } from "./components/Nav";
import Register from "./components/Register";
import { auth } from './api/firebase'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
