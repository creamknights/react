import { useState } from "react";
import { previewList } from "./data";

export default function Room() {
  const [index, setIndex] = useState(0);

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (index < previewList.length - 1) {
      setIndex(index + 1);
    }
  }

  let preview = previewList[index];
  return (
    <>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{preview.name}</i> - {preview.genre}
      </h2>
      <h3>
        ({index + 1} of {previewList.length})
      </h3>
      <img src={preview.url} alt={preview.alt} width={150} height={150} />
      <p>{preview.description}</p>
    </>
  );
}
