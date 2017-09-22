console.log('link');

$button = $('.button');
$screen = $('.screen');

function updateScreen() {
	if(this.id === 'clear'){
		$screen.text('');
	}
	if(this.id === 'eval'){
		let output = eval($screen.text());
		if(output.length > 8)
			output.toFixed(8);
		$screen.text(output);
	}
	else{
		$screen.text($screen.text() + $(this).text());
		if($screen.text() === 'C')
			$screen.text('');
	}
}

$button.on("click", updateScreen);