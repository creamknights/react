import pic from "./GlassMarine.png";

export function Profile() {
  return <img src={pic} alt="GlassMarine" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Mermaid Cookies</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
