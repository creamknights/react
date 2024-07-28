import React from 'react';
import './App.css';
import pic1 from "./photo/GlassMarine.png";
import pic2 from "./photo/GoldCitrine.png";
import pic3 from "./photo/MysticOpal.png";

// React가 각 리스트 항목을 고유하게 식별하는 데 key 속성 필요
function Avatar(props) {
  return (
    <div>
      <img
        className="avatar"
        src={props.photo}
        alt={props.name}
        width={100}
        height={100}
      />
      <h3 key={props.id} style={{ color: props.color }}>{props.name}</h3>
    </div>
  );
}

export function Profile() {
  const cookies = [
    { id: 1, name: "Glass Marine", color: "skyblue", photo: pic1 },
    { id: 2, name: "Gold Citrine", color: "goldenrod", photo: pic2 },
    { id: 3, name: "Mystic Opal", color: "plum", photo: pic3 },
  ];
  const content = cookies.map(cookie =>
    <Avatar
      key={cookie.id}
      name={cookie.name}
      color={cookie.color}
      photo={cookie.photo}
    />
  );

  return <div className='profile-container'>{content}</div>;
}

export default function Gallery() {
  return (
    <section>
      <h1>Mermaid Cookie Gallery</h1>
      <Profile />
    </section>
  );
}
