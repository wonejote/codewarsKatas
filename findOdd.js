function findOdd(A) {
  let mapa = new Map();
  for (const element of A){
    if (mapa.has(element)){ mapa.set(element, mapa.get(element) + 1);}
    else {mapa.set(element, 1);}
  }
  for (const [key,val] of mapa){
    if (val%2 != 0){ return key;}
  }
}