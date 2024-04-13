//Calling global variables versus local variables

let value1 = 0;

function printNumbers() {
    let value2 = 0;
    value1 = 20
    value2 = 30
    console.log(value1)
    console.log(value2)
};

console.log(value1);
console.log(value2);

changeNumber();