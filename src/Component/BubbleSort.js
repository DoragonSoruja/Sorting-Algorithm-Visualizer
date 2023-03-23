function BubbleSort(array) {
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

  export default BubbleSort