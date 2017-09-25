$("input").on("click", (e) => {
	const $button = $(e.currentTarget).attr("name");
	let $output = $("#output");

	if ($button === "="){
		const calc = eval($output.text())
		$output.text(calc)
		} else if ($button === "clr") {
			$output.empty();
		} else {
 			$output.text($output.text() + $button);
		}
});