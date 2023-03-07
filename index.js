// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i <gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names,event) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
     message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return message;
}
 
function countDown(positiveNumber) {
    while (positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
    return countDown;
}