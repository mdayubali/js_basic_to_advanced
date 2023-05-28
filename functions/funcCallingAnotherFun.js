// function calling another function
function cutFruitPieces(fruit){
    return fruit*5;
}

function fruitsProcessing(apples, oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} of apples and ${orangePieces} of oragnes`;
    return juice;
}

console.log(fruitsProcessing(5,3));