function QuickSort(array){
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

function NewQuickSort(array) {
    let copy = [...array]
    let boundariesArr = new stack()

    let boundaryLeft = 0
    let boundaryRight = copy.length

    boundariesArr.push([boundaryLeft, boundaryRight])

    while(boundariesArr.getSize() !== 0)
    {
        let boundaries = boundariesArr.pop()
        let pivot = copy[boundaries[1] - 1]
        if(boundaries[0] === boundaries[1])
        {
            console.log("End")
            continue;
        }
        for(let x = boundaries[0], y=-1+boundaries[0]; x < boundaries[1]; x++)
        {
            if(copy[x] < pivot)
            {
                y++
                let temp = copy[x]
                copy[x] = copy[y]
                copy[y] = temp
            }

            if(x === boundaries[1] - 1)
            {
                y++
                let temp = copy[x]
                copy[x] = copy[y]
                copy[y] = temp
            }
        }
        if(boundaries[1]-boundaries[0] >= 1)
        {
            boundariesArr.push([boundaries[0], copy.indexOf(pivot)])

            boundariesArr.push([copy.indexOf(pivot)+1, boundaries[1]])
        }
    }
    return copy
}

class stack {
    constructor() {
        this.items = [];
    }

    push(items) {
        this.items.push(items)
    }

    pop() {
        return this.items.pop()
    }

    getSize() {
        return this.items.length;
    }

    isEmpty() {
        return this.getSize() === 0;
    }
}

export {QuickSort, NewQuickSort}