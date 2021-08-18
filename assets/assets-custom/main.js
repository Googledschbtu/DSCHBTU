$(document).ready(function () {
	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 * Future Updates Mohit Jaisal.sa
	 */
	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	var biglist = [];
	for (var i = 0; i < rockstars.length; i++) {
		biglist.push(i);
	}

	biglist = shuffleArray(biglist);

	tinylist = biglist.slice(0, 4);

	console.log(tinylist);

	for (var i = 1; i <= 4; i++) {

		var data = rockstars[tinylist[i - 1]];

		$('#speaker-' + i + "-name").empty().append(data["name"] + "<small>" + data["desc"] + "</small>");
		$('#speaker-' + i + "-pic").attr("src", data["pic"]);
	}

	$('#top-button').on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html').animate({
				scrollTop: 0
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});

});