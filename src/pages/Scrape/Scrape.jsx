import "./Scrape.css";
import { useState } from "react";

export default function Scrape() {
  // https://www.newegg.com/p/pl?d=laptop&page=2
  let [link, setLink] = useState("");
  let [pages, setPages] = useState("");

  function handleScrape(e) {
    e.preventDefault();
    console.log(link, pages);

    fetch("http://localhost:3000/scrapes", {
      method: "POST",
      body: JSON.stringify({
        link,
        pages,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function Header() {
    return <header>hello world</header>;
  }
  function Empty() {
    return <div></div>;
  }

  return (
    <main id="scrape">
      <Header />
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
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <Empty />
    </main>
  );
}
