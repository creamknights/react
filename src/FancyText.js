import "./styles.css";
export default function FancyText({ title, text }) {
  return title ? (
    <span className="fancy title">{text}</span>
  ) : (
    <h3 className="fancy cursive">{text}</h3>
  );
}
