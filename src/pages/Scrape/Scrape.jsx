import "./Scrape.css";
import { useState } from "react";

export default function Scrape() {
  // https://www.newegg.com/p/pl?d=laptop&page=2
  let [scrape, setScrape] = useState("");
  let [page, setPage] = useState("");

  
  function handleScrape(e) {
    e.preventDefault();
    console.log("Scrape");
  }

  return (
    <main id="scrape">
      <form onSubmit={handleScrape}>
        <p>Paste the link to the website</p>
        <input type="url" placeholder="Paste your link here" />
        <input type="number" placeholder="Number of pages" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
