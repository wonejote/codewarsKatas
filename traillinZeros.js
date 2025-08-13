function zeros (n) {
 let zeroCount = 0;
 for (let i = 1; i<=n; i++){
    let actual = i;
  while(actual%5 == 0 && Number.isInteger(actual) ){
    zeroCount++;
    actual = actual/5;
  }
 }
 return zeroCount;
}

function optima(n){
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;}