function NewArray(length) {
    let newArray = []

    for(let x = 0; x < length; x++)
    {
        newArray.push((Math.random() * 10))
    }

    return newArray;
}

export default NewArray