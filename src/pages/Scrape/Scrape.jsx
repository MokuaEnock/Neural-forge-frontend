import "./Scrape.css";

export default function Scrape() {
  return (
    <main id="scrape">
      <form>
        <p>Paste the link to the website</p>
        <input type="url" placeholder="Paste your link here" />
        <input type="number" placeholder="Number of pages" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
