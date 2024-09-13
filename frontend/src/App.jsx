import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
