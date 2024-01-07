import "./App.css";
import list from "./emojiList.json";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [copy, setCopy] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    return setSearch(value);
  };

  const handleCopy = (event) => {
    return console.log(event);
  };

  return (
    <>
      <header>
        <h1>emoji search</h1>
        <form>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="What emoji are you looking for ?"
            onChange={handleSearch}
          />
        </form>
      </header>
      <main>
        {search}
        <ul>
          {list.map(
            (data) =>
              data.keywords.includes(search) && (
                <li key={data.title} onClick={handleCopy}>
                  <p>
                    {data.symbol} {data.title}
                  </p>
                  <span>Click to copy!</span>
                </li>
              )
          )}
        </ul>
      </main>
      <footer>Made with React at Le Reacteur by Jonathan</footer>
    </>
  );
}

export default App;
