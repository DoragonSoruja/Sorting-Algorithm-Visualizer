import './App.css';
import React, {useEffect, useRef, useState} from "react";
import Header from "./Component/Header"
import BubbleSort from './Component/BubbleSort';
import NewArray from './Component/NewArray';

function App() {
  const [array, setArray] = useState([4, 5, 2, 3, 1])

  const canvas = useRef()

  function drawGraph(arr) {
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    let width = canvas.current.width * .9;
    let barWidth = width / arr.length * .75;
    let buffer = width / arr.length * .25;
    let arrayPos = canvas.current.width * .05 + buffer / 2;
    arr.forEach(element => {
      ctx.fillRect(arrayPos, canvas.current.height, barWidth, -10*element)
      arrayPos += barWidth + buffer;
    })
  }

  async function drawArray(percent) {
    while (percent < 1) {
      drawGraph(BubbleSort(array, percent))
      percent += .1
      await new Promise(response => setTimeout(response, 1000))
    }
    drawGraph(BubbleSort(array, percent))
    pause.current = false;
  }

  useEffect(() => {
    drawGraph(array)
  }, [array])

  return (
    <div>
      <Header />
      <section>
        <article id="canvas">
          <canvas ref={canvas} />
        </article>
        <section >
          <article id="method-list">
            <select name="sort-method">
              <option value="Bubble Sort">Bubble Sort</option>
            </select>
          </article>
          <article id="buttons">
            <button onClick={() => {drawArray(.1)}}>Update</button>
            <button onClick={() => {setArray(NewArray(300))}}>Reset</button>
          </article>
        </section>
      </section>
    </div>
  );
}

export default App;
