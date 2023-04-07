function BubbleSort(array, percent) {
    let copyArray = [...array]
    let steps = 0
    let maxSteps = getSteps(array)

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

function getSteps(array) {
  let copyArray = [...array]
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