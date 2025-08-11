function squareDigits(num){
 return Number(Array.from(String(num),Number).map(a => a*a).join(""));
}
console.log(squareDigits(232));