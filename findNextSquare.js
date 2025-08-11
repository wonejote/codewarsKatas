
function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))){return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)}
  return -1;
}

let a = findNextSquare(121)
console.log(a);