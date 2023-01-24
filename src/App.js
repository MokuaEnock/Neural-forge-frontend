import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer";
import NavBar from "./components/Nav";
import User from "./pages/User/User";
import Scrape from "./pages/Scrape/Scrape";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user" element={<User />} />
        <Route path="/scrape" element={<Scrape />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
