import './App.css';
import React, {useEffect, useRef, useState} from "react";
import Header from "./Component/Header";
import BubbleSort from './Component/BubbleSort';
import NewArray from './Component/NewArray';

function App() {
  const [array, setArray] = useState([4, 5, 2, 3, 1])
  const [arrSize, setArrSize] = useState(100);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");

  const canvas = useRef()

  function drawGraph(arr) {
    const ctx = canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    let width = canvas.current.width * .9;
    let barWidth = width / arr.length * .75;
    let buffer = width / arr.length * .25;
    let arrayPos = canvas.current.width * .05 + buffer / 2;
    arr.forEach(element => {
      ctx.fillRect(arrayPos, canvas.current.height, barWidth, -10*element*1.5)
      arrayPos += barWidth + buffer;
    })
  }

  function update(algorithm){
    if(algorithm === "Bubble Sort")
    {
      drawBubble(.001)
    }
    else if(algorithm === "Quick Sort")
    {
      drawBubble(1)
    }
  }

  async function drawBubble(percent) {
    const increment = percent
    while (percent < 1) {
      drawGraph(BubbleSort(array, percent))
      percent += increment
      await new Promise(response => setTimeout(response, 10))
    }
    drawGraph(BubbleSort(array, percent))
  }

  useEffect(() => {
    setArray(NewArray(arrSize))
  }, [arrSize])

  useEffect(() => {
    drawGraph(array)
  }, [array])

  return (
    <div id="background">
      <Header />
      <section>
        <article id="canvas">
          <canvas ref={canvas} height={300} width={800}/>
        </article>
        <section id="controls">
          <article id="method-list">
            <select name="sort-method" value={algorithm} onChange={e => {setAlgorithm(e.target.value)}}>
              <option value="Bubble Sort">Bubble Sort</option>
              <option value="Quick Sort">Quick Sort</option>
            </select>
          </article>
          <article id="array-slider">
            <p>{arrSize}</p>
            <input type="range" min={100} max={300} value={arrSize} onChange={e => setArrSize(e.target.value)} />
          </article>
          <article id="buttons">
            <button onClick={() => {update(algorithm);}}>Sort</button>
            <button onClick={() => {}}>Pause</button>
            <button onClick={() => {setArray(NewArray(arrSize))}}>New Array</button>
          </article>
        </section>
      </section>
    </div>
  );
}

export default App;
