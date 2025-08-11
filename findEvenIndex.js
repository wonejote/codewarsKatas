function findEvenIndex(arr) {
  for(const i in arr){
  let suma = arr.slice(0,i).reduce((a,b) => a+b,0);
  let suma2 = arr.slice(Number(i) + 1 ,arr.length).reduce((a,b) => a+b,0);
  if (suma == suma2){
    console.log(i); 
    return Number(i);}

  }
  
}

findEvenIndex([1,2,3,4,3,2,1]);