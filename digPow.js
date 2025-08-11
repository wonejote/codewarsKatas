function digPow(n, p){
  let digits = n.toString(op).split("");
  digits = digits.map(a => Number(a));

  let suma = 0;
  
  for(const number of digits){
    suma += Math.pow(number,p);
    p++;
  }
  if (Number.isInteger(suma/n) ){return suma/n;}
  return -1;

}

console.log(digPow(46288,3))