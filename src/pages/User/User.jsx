import "./User.css";

export default function User() {
  return (
    <main id="user">
      <form>
        <label for="avatar">Choose a dataset:</label>
        <input type="file" name="avatar" accept=".csv"></input>

        <button type="submit">Generate Report</button>
      </form>
    </main>
  );
}
