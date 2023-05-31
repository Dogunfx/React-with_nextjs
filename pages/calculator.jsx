import { useState } from "react";
import style from "../styles/style.module.css";
export default function Calculator() {
  const [result, setResult] = useState(0);
  const [exp, setExp] = useState("");

  function handleCal() {
    setResult(eval(exp));
  }
  function handleChange(evt) {
    setExp(evt.target.value);
  }

  return (
    <div className={style.centerDiv}>
      <h1 className={style.myHeading}>My Calculator</h1>
      <input
        type="text"
        name=""
        id=""
        className={style.myText}
        onChange={handleChange}
      />
      <button onClick={handleCal} className={style.myButton}>
        Calculate
      </button>
      <p>Result:--- {result}</p>

      <br />
      <br />
      <a href="/">Home</a>
    </div>
  );
}
