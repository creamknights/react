import { OSTs, quotes } from "./data.js";
// isCorrect가 true인 경우 체크 표시를 포함하여 반환
function Item(props) {
  return (
    <li className="item">{props.isCorrect ? props.name + " ✔" : props.name}</li>
  );
}

// style을 적용한 "Frozen" 텍스트
const title = (
  <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Frozen</span>
);

export default function CheckList() {
  return (
    <section>
      <p>Q. Check all the characters from the movie {title}.</p>
      <ul>
        <Item isCorrect={true} name="Elsa" />
        <Item isCorrect={true} name="Anna" />
        <Item isCorrect={false} name="Rapunzel" />
      </ul>
    </section>
  );
}

// OST를 보여주는 리스트
export function OSTList() {
  return (
    <div>
      <p>My favorite OSTs</p>
      <ul>
        {OSTs.map((OST) => (
          <li key={OST}>{OST}</li>
        ))}
      </ul>
    </div>
  );
}

// quotes에서 Frozen이 포함된 항목만 추출한 배열
const frozenQuotes = quotes.filter((quote) => quote.source.includes("Frozen"));

// 인용구와 출처를 보여주는 리스트
export function QuoteList() {
  const listItems = frozenQuotes.map((quote) => (
    <li>
      <p>
        <b>
          <q>{quote.quote}</q>
        </b>{" "}
        from {quote.source}
      </p>
    </li>
  ));
  return (
    <div>
      <p>My favorite Quotes from {title}.</p>
      <ul>{listItems}</ul>
    </div>
  );
}
