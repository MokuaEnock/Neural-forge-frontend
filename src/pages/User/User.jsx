import "./User.css";

export default function User() {
  function handleFileUpload(e) {
    e.preventDefault();
    console.log("clicked");
  }

  return (
    <main id="user" onSubmit={handleFileUpload}>
      <form>
        <label for="avatar">Choose a dataset:</label>
        <input type="file" name="avatar" accept=".csv"></input>

        <button type="submit">Generate Report</button>
      </form>
    </main>
  );
}
