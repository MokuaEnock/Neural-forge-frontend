import "./Scrape.css";
import { useState } from "react";

export default function Scrape() {
  // https://www.newegg.com/p/pl?d=laptop&page=2
  let [scrape, setScrape] = useState("");
  let [page, setPage] = useState("");

  function handleScrape(e) {
    e.preventDefault();
    console.log(scrape, page);

    fetch("http://localhost:3000/scrape", {
      method: "POST",
      body: JSON.stringify({
        scrape,
        pages: page,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <main id="scrape">
      <form onSubmit={handleScrape}>
        <p>Paste the link to the website</p>
        <input
          type="url"
          placeholder="Paste your link here"
          value={scrape}
          onChange={(e) => setScrape(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of pages"
          min="0"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
