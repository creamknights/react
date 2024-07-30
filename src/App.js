import { useState } from "react";
import { Header, Nav, Article } from "./Structure.js";
import Gallery from "./Gallery.js";
import CheckList from "./PackingList.js";
import { OSTList, QuoteList } from "./PackingList.js";
import Room from "./preview.js";

export default function App() {
  const [id, setId] = useState(null);
  const [mode, setMode] = useState("WELCOME");
  const topics = [
    { id: 1, title: "Cookie Run", body: <Gallery /> },
    {
      id: 2,
      title: "Frozen",
      body: (
        <>
          <CheckList />
          <OSTList />
          <QuoteList />
        </>
      ),
    },
  ];
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body={<Room></Room>}></Article>;
  } else if (mode === "READ") {
    let title = null;
    let body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
  }
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      />
      {content}
    </div>
  );
}
