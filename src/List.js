import pic from "./MysticOpal.png";

export default function List() {
  return (
    <>
      <h1>Mystic Opal Cookie</h1>
      <img src={pic} alt="Mystic Opal" className="photo" />
      <ul>
        <li>A gemstone mermaid blessed by the love of the sea</li>
        <li>Ability to control the weather</li>
        <li>"Don't be afraid of being swept away by the waves... by fate."</li>
      </ul>
    </>
  );
}
