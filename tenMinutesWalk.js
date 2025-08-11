function isValidWalk(walk) {
  let horizontal = 0;
  let vertical = 0;
console.log(walk.length);
  if (walk.length != 10){console.log("no tiene 10");return false;}

  for (const dir of walk){
    switch(dir){
        case "n": vertical++; break;
        case "s": vertical--; break;
        case "e": horizontal++; break;
        case "w": horizontal--; break;
    }
  }
  if (horizontal == 0 && vertical == 0){return true;}
  return false;
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
