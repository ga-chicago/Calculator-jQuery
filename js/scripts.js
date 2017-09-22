console.log('linked');

const addition = (x, y) => {
	return x + y;
}

const subtraction = (x, y) => {
	return x - y;
}

const multiplication = (x, y) => {
	return x * y;
}

const division = (x, y) => {
	return x / y;
}

const createDivs = () => {
	for (let i = 0; i < 16; i++){
		const presser = $('<div></div>', {id: 'icon-' + i, className: 'clicker'})
		$('.input-buttons').append(presser);
		presser.css('height', '21%');
		presser.css('width', '21%');
		presser.css('margin', '2%');
		presser.css('backgroundColor', 'white');
		presser.css('font-size', '6vh');
		presser.css('text-align', 'center');
	}
}

createDivs();

$('#icon-0').text('7');
$('#icon-1').text('8');
$('#icon-2').text('9');
$('#icon-3').text('/');
$('#icon-4').text('4');
$('#icon-5').text('5');
$('#icon-6').text('6');
$('#icon-7').text('X');
$('#icon-8').text('1');
$('#icon-9').text('2');
$('#icon-10').text('3');
$('#icon-11').text('-');
$('#icon-12').text('0');
$('#icon-13').text('.');
$('#icon-14').text('=');
$('#icon-15').text('+');

const firstArray = [];
let firstArrayValue = 0;
const secondArray = [];
let secondArrayValue = 0;
let identifyOp = null;

const logNumber = (item) => {
	if (identifyOp === null){
		firstArray.push(item);
		const trial = firstArray.length;
		parseInt(firstArray[trial - 1]);
		return firstArray[trial - 1];
	} else{
		secondArray.push(item);
		const trial = secondArray.length;
		parseInt(secondArray[trial - 1]);
		return secondArray[trial - 1];
	}
}

$('#icon-0').on('click', logNumber('7'));

//I'm having a lot of trouble assembling the calculator from here
//Ran up against an error in the guts of jQuery itself that reads
//Uncaught TypeError: Cannot create property 'guid' on string '7'

//my plan from here was to:
//create an array constituting the whole of the first array into the calculator
//this could be up to seven digits
//join the array and parseInt upon one of the four functions being clicked
//upon calling parseInt, generate it as the text for #output-screen
//also save the joined and parsed array as firstArrayValue

firstArray.join();
firstArrayValue = parseInt(firstArray);
$('#output-screen').text(firstArrayValue);

//I've set up the four functions to run based on whether
//+ - * or / is clicked
//I would set up a global variable that takes on a new value whenever
//any of the four functions is clicked
//and stays that way through the process

//the secondArray will be constituted and parsed like the first
//as is set up with the if else earlier

//then, upon the equal sign being clicked
//a conditional statement will run
//that depends upon the variable 
//one of the four functions defined at the top will be run
//and an answer will be returned
//and defined as the text for #output-screen

//something like this

const clickEquals = () => {
	if (identifyOp === 'add'){
		const answer = addition(firstArrayValue, secondArrayValue);
		$('#output-screen').text(answer);
		return answer;
	} else if (identifyOp === 'subt'){
		const answer = subtraction(firstArrayValue, secondArrayValue);
		$('#output-screen').text(answer);
		return answer;
	} else if (identifyOp === 'mult'){
		const answer = multiplication(firstArrayValue, secondArrayValue);
		$('#output-screen').text(answer);
		return answer;
	} else if (identifyOp === 'div'){
		const answer = division(firstArrayValue, secondArrayValue);
		$('#output-screen').text(answer);
		return answer;
	} else {
		console.log('Error.');
	}
}

//pressing the clear button will clear the text for #output-screen
//it will also reset firstArray, firstArrayValue,
//secondArray, secondArrayValue, and identifyOp.

