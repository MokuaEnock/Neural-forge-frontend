import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer";
import NavBar from "./components/Nav";
import User from "./pages/User/User";
import Scrape from "./pages/Scrape/Scrape";
import NewScrape from "./pages/Scrape/New";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user" element={<User />} />
        <Route path="/scrape" element={<Scrape />}>
          <Route path="new" element={<NewScrape />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
