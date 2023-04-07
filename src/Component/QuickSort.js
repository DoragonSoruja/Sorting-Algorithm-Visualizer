function QuickSort(array){
    console.log(array)
    if(array.length <= 1){
        return array
    }
    let copyArray = [...array]
    let pivot = copyArray[copyArray.length - 1]

    for(let x = 0, y = -1; x < copyArray.length; x++)
    {
        if(copyArray[x] < pivot){
            y++
            let temp = copyArray[x]
            copyArray[x] = copyArray[y]
            copyArray[y] = temp
        }

        if(x === copyArray.length - 1){
            y++
            let temp = copyArray[x]
            copyArray[x] = copyArray[y]
            copyArray[y] = temp
        }
    }

    let pivotIndex = copyArray.indexOf(pivot)
    let firstHalf = QuickSort(copyArray.slice(0, pivotIndex))
    let secondHalf = QuickSort(copyArray.slice(pivotIndex+1, copyArray.length))
    let newArray = firstHalf.concat(pivot, secondHalf)

    return newArray
}

export default QuickSort