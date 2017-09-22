console.log('working');

//load
	for (i = 0; i <= 9; i++) {
		const number = i;
		const square = $('<div>').on('click', (e) => {	number_add(number);	});
		square.text(i);
		$(".buttons").append(square);
		square.css("background-color", "pink");
	}

		const plus = $('<div>').on('click', (e) => {	add();	});
		plus.text("+");
		$(".buttons2").append(plus);
		plus.css("background-color", "pink");

		const minus = $('<div>');// = $('<div>').on('click', (e) => {		});
		minus.text("-");
		$(".buttons2").append(minus);
		minus.css("background-color", "pink");

		const times = $('<div>');// = $('<div>').on('click', (e) => {		});
		times.text("x");
		$(".buttons2").append(minus);
		plus.css("background-color", "pink");

		const divide = $('<div>');// = $('<div>').on('click', (e) => {		});
		divide.text("/");
		$(".buttons2").append(divide);
		divide.css("background-color", "pink");

		const equals = $('<div>');// = $('<div>').on('click', (e) => {		});
		equals.text("=");
		$(".buttons2").append(equals);
		equals.css("background-color", "pink");

		let display = $('<div>');// = $('<div>').on('click', (e) => {		});
		display.text("00000000");
		$(".number").append(display);
		display.css("background-color", "pink");

let state = 'clear';
let number_array1 = [];
let number_array2 = 0;

let argument = "";


const number_add = (number) => {
number_array1.push(number);

display.text(number_array1.join(""));
}


const add = (number) => {
number_array2 = parseInt(number_array1.join("")) + number_array2
number_array1 = [];
display.text(number_array2);
}


















