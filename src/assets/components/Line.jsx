export default function Line({ onClick, data }) {
  return (
    <li onClick={onClick}>
      <p>
        {data.symbol} {data.title}
      </p>
      <span>Click to copy!</span>
    </li>
  );
}
