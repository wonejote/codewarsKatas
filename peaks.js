
function pickPeaks(arr){
  let pos = [];
  let peaks = [];

  for(let i = 1; i < arr.length - 1; i++)
  {
    let prev = arr[i-1];
    let next = arr[i+1];
    let paso = 2;
    while(arr[i] == next){next = arr[i + paso]; paso++}

    if( arr[i]>prev && arr[i]>next){
        console.log("encontrado pico")
        pos.push(i);
         peaks.push(arr[i]);}
  }
  return {pos,peaks};
}
const arreglo = [1,2,2,2,2,1];
console.log(pickPeaks(arreglo));

