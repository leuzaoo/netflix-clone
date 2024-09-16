import { Route, Routes } from "react-router-dom";

import { useAuthStore } from "./store/authUser.js";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useEffect } from "react";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  console.log("user: ", user);

  useEffect(() => {
    authCheck();
  }, []);

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
