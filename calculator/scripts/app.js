
$(document).ready(function() {
   result = 0;
   revEntry = 0;
   equation = null;
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
    else if (isFunction(buttonClicked)) {
      prevEntry = parseFloat(currentEntry);
      equation = buttonClicked;
      currentEntry = "";
    }
    else if (buttonClicked === "=") {
      currentEntry = equations(prevEntry, currentEntry, equation);
      equation = null;
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

const isFunction = (value) => {
  return value === "/" || value === "*" || value === "+" || value === "-";
};

const equations = (a, b, equation) => {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, equation);
  if (equation === "+") return a + b;
  if (equation === "-") return a - b;
  if (equation === "*") return a * b;
  if (equation === "/") return a / b;
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





















