import { useState } from "react";
import { previewList } from "./data";

export default function Room() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

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

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let preview = previewList[index];
  return (
    <>
      <button onClick={handleBackClick}>Back</button>{" "}
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{preview.name}</i> - {preview.genre}
      </h2>
      <h3>
        ({index + 1} of {previewList.length})
      </h3>
      <p>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
      </p>
      <img src={preview.url} alt={preview.alt} width={150} height={150} />
      {showMore && <p>{preview.description}</p>}
    </>
  );
}
