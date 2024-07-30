import pic3 from "./resource/MysticOpal.png";
import picFrozen from "./resource/Frozen.jpg";

export const OSTs = [
  "For the First Time in Forever",
  "Do You Want to Build a Snowman",
  "Some Things Never Change",
  "Into the Unknown",
  "Show Yourself",
  "I've Got a Dream",
];

// id, 대사, 출처가 포함된 객체를 담은 배열
export const quotes = [
  {
    id: 0, // JSX에서 key로 사용됨 (*) map() 호출 내부의 JSX 엘리먼트에는 항상 key가 필요함
    quote: "It's you, Olaf. You are our tradition.",
    source: "Olaf's Frozen Adventure",
  },
  {
    id: 1,
    quote: "Do you wanna build a snowman?",
    source: "Frozen",
  },
  {
    id: 2,
    quote: "You are the one you've been waiting for all of your life.",
    source: "Frozen II",
  },
  {
    id: 3,
    quote: "I just wanna see the floating lanterns gleam.",
    source: "Tangled",
  },
];

export const previewList = [
  {
    name: "Cookie Run",
    genre: "Game",
    description:
      "Let me introduce my favorite characters in <Cookie Run: Kingdom>",
    url: pic3,
  },
  {
    name: "Frozen",
    genre: "Movie",
    description:
      "I am a huge fan of Frozen. I like two princess, Elsa and Anna, kingdom of Arendelle",
    url: picFrozen,
    alt: "Frozen Image",
  },
];
