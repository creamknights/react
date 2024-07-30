import "./styles.css";
export default function FancyText({ title, text }) {
  return title ? (
    <span className="fancy title">{text}</span>
  ) : (
    <span className="fancy cursive">{text}</span>
  );
}
