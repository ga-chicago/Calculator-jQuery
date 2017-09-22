$button = $('.button');
$screen = $('.screen');
$button.on("click", updateScreen);
 

function updateScreen() {
	//clear
 	if(this.id === 'clear'){
 		$screen.text('');
 	}
 	////evaluate
 	if(this.id === 'eval'){
 		let output = eval($screen.text());
 		$screen.text(output);
 	}
 	else{
 		$screen.text($screen.text() + $(this).text());
 		if($screen.text() === 'C')
 			$screen.text('');
  }
 }
