import './App.css';
import React, {useEffect, useRef, useState} from "react";
import Header from "./Component/Header";
import BubbleSort from './Component/BubbleSort';
import {QuickSort} from './Component/QuickSort';
import NewArray from './Component/NewArray';

function App() {
  const [array, setArray] = useState([8,2,4,7,1,3,9,6,5])
  const [arrSize, setArrSize] = useState(100);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [disabled, setDisabled] = useState(false);
  const [percent, setPercent] = useState(0)
  const paused = useRef(true);

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
      drawBubble(percent, .001)
    }
    else if(algorithm === "Quick Sort")
    {
      drawQuick(percent, .0005)
    }
  }

  async function drawQuick(percent, increment) {
    while(percent < 1 && !paused.current){
      drawGraph(QuickSort(array, percent))
      percent += increment
      await new Promise(response => setTimeout(response, 10))
    }
    drawGraph(QuickSort(array, percent))
    if(percent >= 1){
      setDisabled(false)
      setPercent(0)
    }
    else if(percent < 1){
      setPercent(percent)
    }
  }

  async function drawBubble(percent, increment) {
    while (percent < 1 && !paused.current) {
      drawGraph(BubbleSort(array, percent))
      percent += increment
      await new Promise(response => setTimeout(response, 10))
    }
    drawGraph(BubbleSort(array, percent))
    if(percent >= 1) {
      setDisabled(false)
      setPercent(0)
    }
    else if(percent < 1){
      setPercent(percent)
    }
  }

  useEffect(() => {
    setPercent(0)
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
            <select name="sort-method" value={algorithm} disabled={disabled} onChange={e => {setAlgorithm(e.target.value)}}>
              <option value="Bubble Sort">Bubble Sort</option>
              <option value="Quick Sort">Quick Sort</option>
            </select>
          </article>
          <article id="array-slider">
            <p>{arrSize}</p>
            <input type="range" min={100} max={300} value={arrSize} disabled={disabled} onChange={e => setArrSize(e.target.value)} />
          </article>
          <article id="buttons">
            <button disabled={disabled} onClick={() => {paused.current = false; setDisabled(true); update(algorithm);}}>Sort</button>
            <button disabled={!disabled} onClick={() => {paused.current = !paused.current; setDisabled(false)}}>Pause</button>
            <button disabled={disabled} onClick={() => {setPercent(0); setArray(NewArray(arrSize));}}>New Array</button>
          </article>
        </section>
        <section id="github">
          <article>
            <a href='https://github.com/DoragonSoruja/Sorting-Algorithm-Visualizer'>
              <img src={require("./icons/github-mark.png")} alt='Github Logo' height={50}/>
            </a>
          </article>
          <article>
            <p>DoragonSoruja</p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default App;
