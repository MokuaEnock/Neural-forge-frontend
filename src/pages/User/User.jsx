import "./User.css";

export default function User() {
  return (
    <main id="user">
      <form>
        <label for="avatar">Choose a dataset:</label>
        <input type="file" name="avatar" accept="image/png, image/jpeg"></input>
      </form>
    </main>
  );
}
