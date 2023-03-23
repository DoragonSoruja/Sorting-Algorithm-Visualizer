import './App.css';
import React, {useEffect, useRef, useState} from "react";
import Header from "./Component/Header"
import BubbleSort from './Component/BubbleSort';

function App() {
  const [array, setArray] = useState([4, 5, 2, 3, 1])

  const canvas = useRef()

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    for(let x = 0; x < array.length; x++) {
      ctx.fillRect(10*x+2*x, canvas.current.height, 10, -10*array[x])
    }
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
            <button onClick={() => {setArray([4, 5, 2, 3, 1])}}>Reset</button>
          </article>
        </section>
      </section>
    </html>
  );
}

export default App;
