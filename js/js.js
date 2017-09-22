console.log('working');

//load
	for (i = 0; i <= 9; i++) {
		const square = $('<div>');// = $('<div>').on('click', (e) => {		});
		square.text(i);
		$(".buttons").append(square);
		square.css("background-color", "pink");
	}

		const plus = $('<div>');// = $('<div>').on('click', (e) => {		});
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

