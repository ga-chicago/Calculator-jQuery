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

$('#icon-0').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-1').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-2').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-4').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-5').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-6').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-8').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-9').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-10').on('click', (e) => {
	if (identifyOp === null && firstArray.length < 7){
		firstArray.push(e.currentTarget.innerText);
		let trial = firstArray.length;
		let trialInt = parseInt(firstArray[trial - 1]);
		firstArray[trial - 1] = trialInt;
		let connect = firstArray.join('');
		firstArrayValue = parseInt(connect);
		$('#output-screen').text(firstArrayValue);
	} else if (identifyOp !== null && secondArray.length < 7){
		secondArray.push(e.currentTarget.innerText);
		let trial = secondArray.length;
		let trialInt = parseInt(secondArray[trial - 1]);
		secondArray[trial - 1] = trialInt;
		let connect = secondArray.join('');
		secondArrayValue = parseInt(connect);
		$('#output-screen').text(secondArrayValue);
	} else {
		;
	}
})

$('#icon-15').on('click', (e) => {
	identifyOp = 'add';
})

$('#icon-11').on('click', (e) => {
	identifyOp = 'subt';
})

$('#icon-7').on('click', (e) => {
	identifyOp = 'mult';
})

$('#icon-3').on('click', (e) => {
	identifyOp = 'div';
})

$('#icon-14').on('click', (e) => {
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
		$('#output-screen').text('Error.');
	}
})

$('#clear-button').on('click', (e) => {
	$('#output-screen').text('');
	firstArray.length = 0;
	firstArrayValue = 0;
	secondArray.length = 0;
	secondArrayValue = 0;
	identifyOp = null;
})