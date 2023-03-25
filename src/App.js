import './App.css';
import React, {useEffect, useRef, useState} from "react";
import Header from "./Component/Header"
import BubbleSort from './Component/BubbleSort';
import NewArray from './Component/NewArray';

function App() {
  const [array, setArray] = useState([4, 5, 2, 3, 1])

  const canvas = useRef()

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    let width = canvas.current.width * .9;
    let barWidth = width / array.length * .75;
    let buffer = width / array.length * .25;
    let arrayPos = canvas.current.width * .05 + buffer / 2;
    array.forEach(element => {
      ctx.fillRect(arrayPos, canvas.current.height, barWidth, -10*element)
      arrayPos += barWidth + buffer;
    })
  }, [array])

  return (
    <html>
      <Header />
      <section>
        <article id="canvas">
          <canvas ref={canvas} />
        </article>
        <article id="array-display">
          <ul>
          {array.map((num) =>
            <li>{num}</li>
            )}
          </ul>
        </article>
        <section >
          <article id="method-list">
            <select name="sort-method">
              <option value="Bubble Sort">Bubble Sort</option>
            </select>
          </article>
          <article id="buttons">
            <button onClick={() => {setArray(BubbleSort(array))}}>Update</button>
            <button onClick={() => {setArray(NewArray(50))}}>Reset</button>
          </article>
        </section>
      </section>
    </html>
  );
}

export default App;
