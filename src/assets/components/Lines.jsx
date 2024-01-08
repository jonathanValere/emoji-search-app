import list from "../../emojiList.json";
import Line from "./Line";

export default function Lines({ value, onClick }) {
  return (
    <main className="container">
      <ul>
        {list.map(
          (data, index) =>
            data.keywords.includes(value) && (
              <Line onClick={onClick} data={data} key={index} />
            )
        )}
      </ul>
    </main>
  );
}
