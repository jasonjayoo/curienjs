// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We Generate a random number between 0 and 4 (the number of facts in the curienFact)
	var number = Math.floor((Math.random() * curienFacts.length));
	// We display the fact from the CurienFactsArray that is in the random position we just generated.
	$("#factText").text(curienFacts[number])
})

// This array holds all of our Curien facts!
var curienFacts = ["Located in San Pedro California","Reach Us at 1(800)381-1821", "Tech Support : Support@Curienllc.com", "Shipping Policy: Will ship within 1 business day if item(s) are in stock", "Your Tech Guru: Joshua Carton", "Refund Policy: 90 day refund on all items (excluding food items)"]