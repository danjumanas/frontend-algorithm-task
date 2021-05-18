function changeFahrToCelsius(n){
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
