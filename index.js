function changeFahrToCelsius (n){
let answer;
let parameterType = typeof n;
let errorMsg = `${n} is not a valid number but a/an ${parameterType}`;
let number = parseInt(n, 10);
if(!isNaN(number)){
answer = (number-32)*(5/9);
} else{
answer = errorMsg;
}
return answer;
}
