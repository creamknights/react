function Item(props) {
    return(
        <li className="item">
            {props.isCorrect ? props.name + ' ✔' : props.name}
        </li>
    )
}

export default function PackingList() {
  return (
    <section>
      <p>Q. Check all the characters from the movie <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Frozen</span>.</p>
      <ul>
        <Item isCorrect={true} name="Elsa" />
        <Item isCorrect={true} name="Anna" />
        <Item isCorrect={false} name="Rapunzel" />
      </ul>
    </section>
  );
}
