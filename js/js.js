console.log('working');

//load
	for (i = 0; i <= 9; i++) {
		const number = i;
		const square = $('<div>').on('click', (e) => { number_add(number);	});
		square.text(i);
		$(".buttons").append(square);
		square.css("background-color", "pink");
	}

		const plus = $('<div>').on('click', (e) => { add();	});
		plus.text("+");
		$(".buttons2").append(plus);
		plus.css("background-color", "pink");

		const minus = $('<div>').on('click', (e) => {	sub();	});
		minus.text("-");
		$(".buttons2").append(minus);
		minus.css("background-color", "pink");

		const times = $('<div>').on('click', (e) => {	multi();	});
		times.text("x");
		$(".buttons2").append(times);
		times.css("background-color", "pink");

		const divide = $('<div>').on('click', (e) => {	divided();	});
		divide.text("/");
		$(".buttons2").append(divide);
		divide.css("background-color", "pink");

		const equals = $('<div>').on('click', (e) => {	equal();	});
		equals.text("=");
		$(".buttons2").append(equals);
		equals.css("background-color", "pink");

		let display = $('<div>');// = $('<div>').on('click', (e) => {		});
		display.text("00000000");
		$(".number").append(display);
		display.css("background-color", "pink");

		let argument = $('<div>');// = $('<div>').on('click', (e) => {		});
		argument.text("");
		$(".number").append(argument);
		argument.css("background-color", "pink");

let state = 'clear';
let number_array1 = [];
let buffer = 0;
let number_array2 = 0.1;


const number_add = (number) => {
number_array1.push(number);

display.text(number_array1.join(""));
}


const add = () => {
if (number_array2 !== 0.1) {
number_array2 = parseInt(number_array1.join("")) + number_array2;
}
else {number_array2 = parseInt(number_array1.join(""));}
buffer = "add";
number_array1 = [];
console.log(number_array2, number_array1);
display.text(number_array2);
argument.text("PLUS");

}

const sub = () => {
if (number_array2 !== 0.1) {
number_array2 = parseInt(number_array1.join("")) - number_array2;
}
else {number_array2 = parseInt(number_array1.join(""));}
buffer = "sub";
number_array1 = [];
console.log(number_array2, number_array1);
display.text(number_array2);
argument.text("MINUS");
}

const multi = () => {
if (number_array2 !== 0.1) {
number_array2 = parseInt(number_array1.join("")) * number_array2;
}
else {number_array2 = parseInt(number_array1.join(""));}

buffer = "multi";
number_array1 = [];
console.log(number_array2, number_array1);
display.text(number_array2);
argument.text("TIMES");
}

const divided = () => {
if (number_array2 !== 0.1) {
number_array2 = parseInt(number_array1.join("")) / number_array2;
}
else {number_array2 = parseInt(number_array1.join(""));}

buffer = "divide";
number_array1 = [];
console.log(number_array2, number_array1);
display.text(number_array2);
argument.text("DIVIDE");
}

const equal = () => {
if (buffer === "add") {number_array2 = parseInt(number_array1.join("")) + number_array2;}
if (buffer === "sub") {number_array2 = parseInt(number_array1.join("")) - number_array2;}
if (buffer === "multi") {number_array2 = parseInt(number_array1.join("")) * number_array2;}
if (buffer === "divide") {number_array2 = parseInt(number_array1.join("")) / number_array2;}
buffer = 0;
number_array1 = []
number_array1[0] = number_array2
display.text(number_array2);
number_array2 = 0.1;
console.log(number_array2, number_array1,buffer);
argument.text("");
}

































