function solution(text, markers) {
    if (!text.includes(markers)){return text;}
    let corteIdx = markers == "" ? text.length - 1 : text.indexOf(markers) + 1;
    let pasos = 0;
    while(text[corteIdx - pasos]== " "){pasos++}
    
    return text.slice(0,corteIdx - pasos);
    
  
  }

  console.log((solution("aa bb cc","").split("")));
  
  let palabra = "arroz";
  console.log(palabra);
  console.log(palabra[palabra.length -1])