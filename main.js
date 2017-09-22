console.log("linked");

let number1 = "";
let number2 = "";
let selector = 0;
let sign = "";
let output = 0;



$('#1').on('click', ()=>{
	if (selector === 0){
		number1 += "1";
		updateOutput();
	}else if (selector === 1){
		number2 += "1";
		updateOutput();
	}
});

$('#2').on('click', ()=>{
	if (selector === 0){
		number1 += "2";
		updateOutput();
	}else if (selector === 1){
		number2 += "2";
		updateOutput();
	}
});

$('#3').on('click', ()=>{
	if (selector === 0){
		number1 += "3";
		updateOutput();
	}else if (selector === 1){
		number2 += "3";
		updateOutput();
	}
});

$('#4').on('click', ()=>{
	if (selector === 0){
		number1 += "4";
		updateOutput();
	}else if (selector === 1){
		number2 += "4";
		updateOutput();
	}
});

$('#5').on('click', ()=>{
	if (selector === 0){
		number1 += "5";
		updateOutput();
	}else if (selector === 1){
		number2 += "5";
		updateOutput();
	}
});

$('#6').on('click', ()=>{
	if (selector === 0){
		number1 += "6";
		updateOutput();
	}else if (selector === 1){
		number2 += "6";
		updateOutput();
	}
});

$('#7').on('click', ()=>{
	if (selector === 0){
		number1 += "7";
		updateOutput();
	}else if (selector === 1){
		number2 += "7";
		updateOutput();
	}
});

$('#8').on('click', ()=>{
	if (selector === 0){
		number1 += "8";
		updateOutput();
	}else if (selector === 1){
		number2 += "8";
		updateOutput();
	}
});

$('#9').on('click', ()=>{
	if (selector === 0){
		number1 += "9";
		updateOutput();
	}else if (selector === 1){
		number2 += "9";
		updateOutput();
	}
});

$('#0').on('click', ()=>{
	if (selector === 0){
		number1 += "0";
		updateOutput();
	}else if (selector === 1){
		number2 += "0";
		updateOutput();
	}
});

$('#dot').on('click', ()=>{
	if (selector === 0){
		number1 += ".";
		updateOutput();
	}else if (selector === 1){
		number2 += ".";
		updateOutput();
	}
});


const updateOutput = () => {
	if (selector === 0){
		$('#output').text(number1);
	}else if (selector === 1){
		$('#output').text(number2);
	};
};


$('#xy').on('click', ()=>{
	sign = "xy";
	selector = 1;
	$('#xy').css('backgroundColor', 'rgba(0,0,0,.3)');
});

$('#x12').on('click', ()=>{
	sign = "x12";
	selector = 1;
	$('#x12').css('backgroundColor', 'rgba(0,0,0,.3)');
});

$('#divide').on('click', ()=>{
	sign = "/";
	selector = 1;
	$('#divide').css('backgroundColor', 'rgba(0,0,0,.3)');
});

$('#multiply').on('click', ()=>{
	sign = "*";
	selector = 1;
	$('#multiply').css('backgroundColor', 'rgba(0,0,0,.3)');
});

$('#-').on('click', ()=>{
	sign = "-";
	selector = 1;
	$('#-').css('backgroundColor', 'rgba(0,0,0,.3)');
});

$('#add').on('click', ()=>{
	sign = "+";
	selector = 1;
	$('#add').css('backgroundColor', 'rgba(0,0,0,.3)');
});

const calculate = () => {
	finalNum1 = parseFloat(number1);
	console.log(finalNum1);
	finalNum2 = parseFloat(number2);
	console.log(finalNum2);
	if (sign === "+"){
		output = finalNum1 + finalNum2;
	}else if (sign === "-"){
		output = finalNum1 - finalNum2;
	}else if (sign === "*"){
		output = finalNum1 * finalNum2;
	}else if (sign === "/"){
		output = finalNum1 / finalNum2;
	}else if (sign === "x12"){
		output = Math.sqrt(finalNum1);
	}else if (sign === "xy"){
		output = Math.pow(finalNum1, finalNum2);
	};
	$('#output').text(output);
};

$('#finish').on('click', ()=>{
	if (selector === 1){
		calculate();
		resetColor();
	};
});


$('#clear').on('click', ()=>{
	number1 = "";
	number2 = "";
	selector = 0;
	sign = "";
	output = 0;
	$('#output').text(output);
	resetColor();
});

const resetColor = () => {
	$('.square').css('backgroundColor', 'rgba(0,0,0,0)');
};

































