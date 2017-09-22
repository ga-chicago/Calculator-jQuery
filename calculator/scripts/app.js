
$(document).ready(function() {
   result = 0;
   revEntry = 0;
   operation = null;
  let currentEntry = "0";
  updateDisplay(result);

  $(".button").on("click", function(evt) {
  	console.log(evt);
    const buttonClicked = $(this).html();
    console.log($(this).html());
    console.log(buttonClicked);

    if (buttonClicked === "C") {
      result = 0;
      currentEntry = "0";
    } 
    else if (isNumber(buttonClicked)) {
      if (currentEntry === "0") currentEntry = buttonClicked;
      else currentEntry = currentEntry + buttonClicked;
    } 
    else if (isOperator(buttonClicked)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonClicked;
      currentEntry = "";
    }
    else if (buttonClicked === "=") {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }

    updateDisplay(currentEntry);
  });
});

const updateDisplay = (displayValue) => {
    displayValue = displayValue.toString();
  $(".displayScreen").html(displayValue.substring(0, 10));
};

const isNumber = (value) => {
  return !isNaN(value);
};

const isOperator = (value) => {
  return value === "/" || value === "*" || value === "+" || value === "-";
};

const operate = (a, b, operation) => {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
};
const hover = () =>{
	$('.button').hover(function(){
		$(this).css('backgroundColor', 'rgb(247, 184, 77)');
	})
	$('.button').mouseout(function(){
		$(this).css('backgroundColor', 'rgb(255, 232, 193)');
	})
};
hover();





















