import styles from "./Search.module.css";

export default function Search({ onChange }) {
  return (
    <header className={`container`}>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        onChange={onChange}
      />
    </header>
  );
}
