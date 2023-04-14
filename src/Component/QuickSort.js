function QuickSort(array, percent) {
    let copy = [...array]
    let boundariesArr = new stack()
    let steps = 0
    let maxSteps = GetSteps(copy)

    let boundaryLeft = 0
    let boundaryRight = copy.length

    boundariesArr.push([boundaryLeft, boundaryRight])

    while(boundariesArr.getSize() !== 0)
    {
        let boundaries = boundariesArr.pop()
        console.log(copy)
        console.log([copy[boundaries[0]], copy[boundaries[1]-1], copy[boundaries[0]+Math.round((boundaries[1]-boundaries[0])/2)]])
        let pivot = copy[boundaries[1] - 1]
        if(boundaries[0] === boundaries[1])
        {
            continue;
        }
        for(let x = boundaries[0], y=-1+boundaries[0]; x < boundaries[1]; x++)
        {
            if(copy[x] < pivot)
            {
                y++
                steps++
                let temp = copy[x]
                copy[x] = copy[y]
                copy[y] = temp
            }

            if(x === boundaries[1] - 1)
            {
                y++
                steps++
                let temp = copy[x]
                copy[x] = copy[y]
                copy[y] = temp
            }

            if(steps >= maxSteps * percent){
                break;
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

function GetSteps(array) {
    let steps = 0;
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
                steps++
            }

            if(x === boundaries[1] - 1)
            {
                y++
                let temp = copy[x]
                copy[x] = copy[y]
                copy[y] = temp
                steps++
            }
        }
        if(boundaries[1]-boundaries[0] >= 1)
        {
            boundariesArr.push([boundaries[0], copy.indexOf(pivot)])

            boundariesArr.push([copy.indexOf(pivot)+1, boundaries[1]])
        }
    }
    return steps
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

export {QuickSort}