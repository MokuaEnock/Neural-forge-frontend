import "./Scrape.css";
import { useState } from "react";

export default function Scrape() {
  // https://www.newegg.com/p/pl?d=laptop&page=2
  let [link, setLink] = useState("");
  let [page, setPage] = useState("");

  function handleScrape(e) {
    e.preventDefault();
    console.log(link, page);

    fetch("http://localhost:3000/scrapes", {
      method: "POST",
      body: JSON.stringify({
        link,
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
          value={link}
          onChange={(e) => setLink(e.target.value)}
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
