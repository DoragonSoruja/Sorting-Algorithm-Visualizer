import './App.css';
import React, {useState} from "react";

function App() {
  const [array, setArray] = useState([5, 3, 1, 2, 4])

  const canvas = document.getElementById("canvas")

  const bubbleSort = (array) => {
    let copyArray = [...array]

    for(let x = 0;  x < copyArray.length; x++)
    {
      for(let y = 0; y < copyArray.length-1; y++)
      {
        if(copyArray[y] > copyArray[y+1])
        {
          let temp = copyArray[y]
          copyArray[y] = copyArray[y+1]
          copyArray[y+1] = temp
        }
      }
    }

    return copyArray
  }

  return (
    <body>
      <canvas id="canvas">
        {}
      </canvas>
      <ul>
      {array.map((num) =>
        <li>{num}</li>
        )}
      </ul>

      <button onClick={() => {setArray(bubbleSort(array))}}>Update</button>
    </body>
  );
}

export default App;
