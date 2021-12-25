let counter = require('./array');

function test(){
    console.log("hello");
}
test();
function call(func){
    func();
}

var printSomething = function (){
    console.log("text");
};

call(printSomething);

console.log(counter([1,7,99,4,8]));
