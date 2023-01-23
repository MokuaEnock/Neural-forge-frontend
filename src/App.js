import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer";
import NavBar from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
