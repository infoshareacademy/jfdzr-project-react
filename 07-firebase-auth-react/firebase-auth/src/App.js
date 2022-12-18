import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
