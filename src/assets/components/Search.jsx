export default function Search({ onChange }) {
  return (
    <header>
      <h1>emoji search</h1>
      <form>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="What emoji are you looking for ?"
          onChange={onChange}
        />
      </form>
    </header>
  );
}
