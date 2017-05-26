var wins = 0;
var losses = 0;
var headsResult = 0;
var tailsResult = 0;
var userChoice;
var headPicks = 0;
var tailsPicks = 0;


$("button").each( function() {
	$(this).on("click", function() {
		if ($(this).attr("id") === "heads") {
			headPicks++;
			$("#choice").html("Heads");
			userChoice = 0;
			coinFlip(userChoice)
		}
		else {
			tailsPicks++;
			$("#choice").html("Tails");
			userChoice = 1;
			coinFlip(userChoice)
		}
	})
})

function coinFlip(userChoice) {
	var randomNumber = Math.floor(Math.random() * 2);
	if (randomNumber === 0) {
		headsResult++
		$("#flip").html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg">')
	}
	else {
		tailsResult++
		$("#flip").html('<img src="http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg">')
	}
	if (randomNumber === userChoice) {
		wins++;
	}
	else {
		losses++;
	}

	$("#winPer").text(Math.floor(wins / (headPicks + tailsPicks) * 100))
	$("#wins").text(wins)
	$("#losses").text(losses)
	$("#headPicks").text(headPicks)
	$("#tailsPicks").text(tailsPicks)
	$("#headsResult").text(headsResult)
	$("#tailsResult").text(tailsResult)
}