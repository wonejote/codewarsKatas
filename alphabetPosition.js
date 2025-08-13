

let mapa = new Map();

mapa.set("a", 1);
mapa.set("b",2);
mapa.set("c",3);
mapa.set("d",4);
mapa.set("e",5);
mapa.set("f",6);
mapa.set("g",7);
mapa.set("h",8);
mapa.set("i",9);
mapa.set("j",10);
mapa.set("k",11);
mapa.set("l",12);
mapa.set("m",13);
mapa.set("n",14);
mapa.set("o",15);
mapa.set("p",16);
mapa.set("q",17);
mapa.set("r",18);
mapa.set("s",19);
mapa.set("t",20);
mapa.set("u",21);
mapa.set("v",22);
mapa.set("w",23);
mapa.set("x",24);
mapa.set("y",25);
mapa.set("z",26);
function alphabetPosition(text) {
text = text.toLowerCase().split("").filter( a => /^[a-z]$/.test(a)).map(a => Number(mapa.get(a))).join(" ");
console.log(text);
return text;
}

alphabetPosition("The sunset sets at twelve o' clock.")// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
alphabetPosition("The narwhal bacons at midnight.") //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");