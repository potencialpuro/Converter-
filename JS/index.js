$(document).ready(function() {

	// 1. Create an array to hold the names of the days
	var days = [
		'B\'ATZ\'',
		'E',
		'AJ',
		'I\'X',
		'TZ\'IKIN',
		'AJMAQ',
		'N\'OJ',
		'TIJAX',
		'KAWOQ',
		'AJPU',
		'IMOX',
		'IQ\'',
		'AQ\'AB\'AL',
		'K\'AT',
		'KAN',
		'KAME',
		'KIEJ',
		'Q\'ANIL',
		'TOJ',
		'TZ\'I\''
	];

	// 2. Create a function that takes a day name as input and
	// returns HTML String for the carousel
	function createDayHTML(dayName) {
		var imageHTML = '<img id="carousel" src="images/carousel/' + dayName.toLowerCase() + '.png" />';
		var h6HTML = '<h6>' + dayName + '<h6>';

		return imageHTML + h6HTML;
	}

	// 3. Create a new empty array to hold day HTML Strings
	
	var dayHTML = [

	];

	// 4. Loop through first array, create HTML for each day, add
	// the HTML to the new array
	for (var i = 0; i < days.length; i++) {
		var day = days[i];
		var html = createDayHTML (day);
	
		dayHTML.push(html);
	}

	// 5. Create a variable to store what index the carousel is
	// at (start at 0)
	var carouselIndex = 0;

	// 6. Listen for clicks on the next and previous buttons and
	// change the carousel accordingly (using the stored HTML)
	$('#next').click(showNextImage)
	$('#previous').click(showPreviousImage)
	
	function showNextImage () {
		carouselIndex++;

		if (carouselIndex > dayHTML.length - 1) {
			carouselIndex = 0;
		}

		var nextDayHTML = dayHTML[carouselIndex];

		$('#carousel-view').html(nextDayHTML)
	}

	// 7.
		function showPreviousImage () {
		carouselIndex--;

		if (carouselIndex < 0) {
			carouselIndex = dayHTML.length - 1;
		}

		var nextDayHTML = dayHTML[carouselIndex];

		$('#carousel-view').html(nextDayHTML)
	}
});

