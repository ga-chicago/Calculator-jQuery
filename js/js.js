console.log('working');

//load
	for (i = 0; i <= 9; i++) {
		const number = i;
		const square = $('<div>').on('click', (e) => { number_add(number);	});
		square.text(i);
		$(".buttons").append(square);
		square.css("background-color", "red");
	}

		const plus = $('<div>').on('click', (e) => { add();	});
		plus.text("+");
		$(".buttons2").append(plus);
		plus.css("background-color", "red");

		const minus = $('<div>').on('click', (e) => {	sub();	});
		minus.text("-");
		$(".buttons2").append(minus);
		minus.css("background-color", "red");

		const times = $('<div>').on('click', (e) => {	multi();	});
		times.text("x");
		$(".buttons2").append(times);
		times.css("background-color", "red");

		const divide = $('<div>').on('click', (e) => {	divided();	});
		divide.text("/");
		$(".buttons2").append(divide);
		divide.css("background-color", "red");

		const equals = $('<div>').on('click', (e) => {	equal();	});
		equals.text("=");
		$(".buttons2").append(equals);
		equals.css("background-color", "red");

		const clear_ok = $('<div>').on('click', (e) => {	clear_it();	});
		clear_ok.text("CLEAR");
		$(".buttons2").append(clear_ok);
		clear_ok.css("background-color", "red");


		let display = $('<div>');// = $('<div>').on('click', (e) => {		});
		display.text("00000000");
		$(".number").append(display);
		display.css("background-color", "red");

		let argument = $('<div>');// = $('<div>').on('click', (e) => {		});
		argument.text("");
		$(".number").append(argument);
		argument.css("background-color", "red");

state = "clear";
let number_array1 = [];
let buffer = 0;
let number_array2 = 0;
let number_array3 = 0;


const number_add = (number) => {
if (buffer === "x") { clear_it();}
number_array1.push(number);

display.text(number_array1.join(""));
}


const add = () => {
if (buffer === "add") {equal();}
if (buffer === "sub") {equal();}
if (buffer === "multi") {equal();}
if (buffer === "divide") {equal();}

	if ((buffer !== "x") && (number_array2 !== 0)) {
		number_array2 = parseInt(number_array1.join("")) + number_array2;
		display.text(number_array2);
	}
else if (buffer === 0) {
number_array2 = parseInt(number_array1.join(""));
number_array1 = [];
}


buffer = "add";
argument.text("PLUS");
}

const sub = () => {
if (buffer === "add") {equal();}
if (buffer === "sub") {equal();}
if (buffer === "multi") {equal();}
if (buffer === "divide") {equal();}

console.log(number_array2, number_array1, buffer);
	if ((buffer !== "x") && (number_array2 !== 0)) {
		number_array2 = number_array2 - parseInt(number_array1.join(""));
		display.text(number_array2);
	}
else if (buffer !== "x") {
number_array2 = parseInt(number_array1.join(""));
number_array1 = [];
}
buffer = "sub";
argument.text("MINUS");
}

const multi = () => {
	if (buffer === "add") {equal();}
if (buffer === "sub") {equal();}
if (buffer === "multi") {equal();}
if (buffer === "divide") {equal();}

console.log(number_array2, number_array1, buffer);
	if ((buffer !== "x") && (number_array2 !== 0)) {
		number_array2 = number_array2 * parseInt(number_array1.join(""));
		display.text(number_array2);
	}
else if (buffer !== "x") {
number_array2 = parseInt(number_array1.join(""));
number_array1 = [];
}
buffer = "multi";
argument.text("TIMES");
}


const divided = () => {
	if (buffer === "add") {equal();}
if (buffer === "sub") {equal();}
if (buffer === "multi") {equal();}
if (buffer === "divide") {equal();}
console.log(number_array2, number_array1, buffer);
	if ((buffer !== "x") && (number_array2 !== 0)) {
		number_array2 = number_array2 - parseInt(number_array1.join(""));
		display.text(number_array2);
	}
else if (buffer !== "x") {
number_array2 = parseInt(number_array1.join(""));
number_array1 = [];
}
buffer = "divide";
argument.text("DIVIDED");
}

const equal = () => {
//if (number_array2 === 0.1) {console.log("ok"); display.text("0000000");}
//else {
console.log(number_array3, number_array2, number_array1,buffer);

if (buffer === "add") {number_array2 = parseInt(number_array1.join("")) + number_array2;}
if (buffer === "sub") {number_array2 = number_array2 - parseInt(number_array1.join(""));}
if (buffer === "multi") {number_array2 = parseInt(number_array1.join("")) * number_array2;}
if (buffer === "divide") {number_array2 = number_array2 / parseInt(number_array1.join(""));}
buffer = "x";
number_array1 = [];
display.text(number_array2);
//number_array2 = 0;
//number_array2 = 0.1;
console.log(number_array2, number_array1,buffer);
argument.text("");
state = "do it";
}//}

const clear_it = () => {
	state = "clear";
 number_array1 = [];
 buffer = 0;
 number_array2 = 0;
display.text("0000000");

}





























