function convertFahrToCelsius(n){
let answer;
let type = typeof n;
if (Array.isArray(n)){
answer = `${n} is not a valid number but a/an array`;
} else {
let number = parseInt(n, 10);
if(!isNaN(number)){
answer = ((number-32)*(5/9));
answer = answer.toFixed(4);
} else {
answer = `${n} is not a valid number but a/an ${type}`;
}
}
return answer;
}


function checkYuGiHo(n){
let myArray = [1];
let arrayItem;
let output;
let number = parseInt(n, 10);
if (isNaN(number)){
output = `invalid parameter: "${n}"`;
} else {
for(i=2; i <= number; i++){
if (i%2===0 && i%3!==0 && i%5!==0){
arrayItem = "Yu";
} else if (i%2!==0 && i%3===0 && i%5!==0){
arrayItem = "Gi";
} else if (i%2!==0 && i%3!==0 && i%5===0){
arrayItem = "Oh";
} else if (i%2===0 && i%3===0 && i%5!==0){
arrayItem = "Yu-Gi";
} else if (i%2===0 && i%3!==0 && i%5===0){
arrayItem = "Yu-Oh";
} else if (i%2!==0 && i%3===0 && i%5===0){
arrayItem = "Gi-Oh";
} else if (i%2===0 && i%3===0 && i%5===0){
arrayItem = "Yu-Gi-Oh";
} else{
arrayItem = i;
}
myArray.push(arrayItem);
}
console.log(myArray);
output = myArray;
}
return output;
}
