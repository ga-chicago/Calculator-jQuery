console.log("My calculator javascript file is connected")


// querying finding on the page
// creating things on the page
// listening for events
// updating elements 

$('a').click((e)=>{
	const pressed = e.target.text
	const onscreen = $('#screen').text()
	if(pressed === 'C'){
	 	$('#screen').text('') 
	}else if(pressed === '='){
		$('#screen').text(eval(onscreen)) 
	}else{
		$('#screen').text(onscreen + pressed) 
	}
})

