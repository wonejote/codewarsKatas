function zero(op) {
    if (arguments.length == 0){return 0;}
    return op(0);
}
function one(op) { if (arguments.length == 0){return 1;}
return op(1);}
function two(op) { if (arguments.length == 0){return 2;} return op(2);}
function three(op) { if (arguments.length == 0){return 3;} return op(3);}
function four(op) { if (arguments.length == 0){return 4;} return op(4);}
function five(op) { if (arguments.length == 0){return 5;} return op(5);}
function six(op) { if (arguments.length == 0){return 6;} return op(6);}
function seven(op) { if (arguments.length == 0){return 7;} return op(7);}
function eight(op) { if (arguments.length == 0){return 8;} return op(8);}
function nine(op) { if (arguments.length == 0){return 9;} return op(9);}

function plus(number) {return (x) => x + number;}
function minus(number) {return (x) => x - number;}
function times(number) {return (x)=> x*number;}
function dividedBy(number) {return (x) => Math.floor(x / number);}

console.log(nine(dividedBy(two())));



