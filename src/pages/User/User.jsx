import "./User.css";

export default function User() {
  return (
    <main id="user">
      <form>
        <label>Upload your dataset</label>
        <input type="file" accept=".csv" />
        <input type="submit" value="Upload" />
      </form>
    </main>
  );
}
