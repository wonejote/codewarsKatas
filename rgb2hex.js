function rgb(r, g, b) {
   let red = auxFunc(r)
   let green = auxFunc(g)
   let blue = auxFunc(b)
   
    return red + green + blue;
}
let mapaHex = new Map([
  [0, "0"],
  [1, "1"],
  [2, "2"],
  [3, "3"],
  [4, "4"],
  [5, "5"],
  [6, "6"],
  [7, "7"],
  [8, "8"],
  [9, "9"],
  [10, "A"],
  [11, "B"],
  [12, "C"],
  [13, "D"],
  [14, "E"],
  [15, "F"]
]);

 function auxFunc(color) {
    if (color > 255){return "FF";}
    else if (color <= 0){return "00"}
    else
    {   

      let num = color;
      let hex = "";
      while (num > 0)
      {
        hex += mapaHex.get((num%16)).toString();
        num = Math.floor(num/16);
      }
      hex = hex.split("").reverse();
      if (hex.length == 1){hex.unshift("0");}
      return hex.join("");
    }
}

console.log(rgb(230,120,45));
Array.prototype.un