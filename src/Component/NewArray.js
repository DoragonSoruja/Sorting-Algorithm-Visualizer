function NewArray(length) {
    let newArray = []

    for(let x = 0; x < length; x++)
    {
        newArray.push((Math.random() * 15))
    }

    return newArray;
}

export default NewArray