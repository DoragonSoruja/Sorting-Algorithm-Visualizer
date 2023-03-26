function BubbleSort(state, percent) {
    let copyArray = [...state]
    let steps = 0
    let maxSteps = getSteps(state)
    console.log(maxSteps)
    console.log(percent)

    for(let x = 0;  x < copyArray.length; x++)
    {
      for(let y = 0; y < copyArray.length-1; y++)
      {
        // Step
        steps += 1
        if(steps === Math.round(maxSteps * percent)) {
          return copyArray
        }
        if(copyArray[y] > copyArray[y+1])
        {
          let temp = copyArray[y]
          copyArray[y] = copyArray[y+1]
          copyArray[y+1] = temp
          // Step
          steps += 1
          if(steps === Math.round(maxSteps * percent)){
            return copyArray
          }
        }
      }
    }
    return copyArray
}

function getSteps(state) {
  let copyArray = [...state]
  let steps = 0

  for(let x = 0;  x < copyArray.length; x++)
  {
    for(let y = 0; y < copyArray.length-1; y++)
    {
      // Step
      steps += 1
      if(copyArray[y] > copyArray[y+1])
      {
        let temp = copyArray[y]
        copyArray[y] = copyArray[y+1]
        copyArray[y+1] = temp
        // Step
        steps += 1
      }
    }
  }
  
  return steps
}

export default BubbleSort