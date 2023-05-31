import { useState } from "react";

export default function StatefulButton() {
  // stateless component
  // stateful component

  const [myText, setMyText] = useState("Hello world");

  function handleClick() {
    const myText = "New Content";
  }
  return (
    <div>
      <button onClick={handleClick}>Change Text</button>
      <p>{myText}</p>
    </div>
  );
}

export function StateLessButton() {
  return <button>Just Do nothing</button>;
}
