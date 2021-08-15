// 1. Number Type Variable

var age = 8;
var mySubjectsNumber = 4;
var rollNumber = 2;
// 2. String Type Variable

var myName = 'Intiser Yusra Saiba';
var motherName = 'Irin Ara Ratna';
var fatherName = 'Mdnazmul Sobuz';
var BrotherName = 'Ihtisam Hossain Shayan';
var schooleName = 'Uddayan Shishu B9ddalaya';
 // 3. Boolean Type Variable
var schoolePore = true;
var myNameIsShayan = false;
var hairIsWhite = false;
// 4. Array Type Variable

var array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var elementCount = array.length;
var fiveindex = array.indexOf('5');
 array.push('11', '12', '13', '14', '15', '16', '17', '18', '19', '20');
 array.pop();
 console.log(fiveindex);

// 5. let, const
const myage = 5;
let Name = 'Intiser Yusra Saiba';
//  6. Math
//  Plus
function add(Number1, Number2) {
    let plus = (Number1 + Number2);
    return plus;
};
console.log(add(8, 3));
// Minus
function remove(Number1, Number2) {
    const minus = (Number1 - Number2);
    return minus;    
}
console.log(remove(8, 3));
// Multiply
function quality(Number1, Number2) {
    var multiply = (Number1 * Number2);
    return multiply;
}
console.log(quality(6, 3));
// Vagfol
function vag(Number1, Number2) {
    var vagfol = (Number1 / Number2);
    return vagfol;
}
console.log(quality(8, 5));
// Vagsas
function vag(Number1, Number2) {
    var vagsas = (Number1 % Number2);
    return vagsas;
}
console.log(quality(8, 3));
// 7. if-else
var bookPrice = 500;
if (bookPrice < 120) {
    console.log('I will buy this book')
}
else {
    console.log('Mama, kichu discount den na, apni na mama!');
}

// 8. loop
var i = 0;
while (i < 17) {
    console.log('rost den plese !!');
    i++;
}

for (var i = 0; i <= 17; i++) {
    console.log('rost den plese !!');
}

// 9. Function
function startFan() {
    console.log('walk towards the switch')
    console.log('press the switch');
}

// call the function
startFan();

console.log('eat breakfast');
console.log('Drink tea');
console.log('take a shower');
startFan();
// 10. Object
var book = {
    BookName: 'ঘরে বসে Spoken English' ,
    bookPrice: 300,
    Writer: 'Munzereen Shahid', 
    Edit: 'Aymun Sadik',
    Pages: 144,
}