jQuery(document).ready(function($) {

	// Код для каверов в блоке .ingridients

	var ingredients = $('.ingredients-list li');

	$.each(ingredients, function(index) {
		$('.ingredients-list li:nth-child('+ index +')').hover(function() {
			$('.ingredients-list li:nth-child('+ index +') .cover').addClass('active');
		}, function() {
			$('.ingredients-list li:nth-child('+ index +') .cover').removeClass('active');
		});
	});

	$('.ingredients-list li:last-child').hover(function() {
		$('.ingredients-list li:last-child .cover').addClass('active');
	}, function() {
		 $('.ingredients-list li:last-child .cover').removeClass('active');
	});

	// Код для табов в блоке .reviews

	var tab = $('a[data-toggle="tab"]');

	tab.on('click', function() {
		event.preventDefault();

		$('.active').removeClass('active');
		$(this).parent().toggleClass('active');

		var target = $(this).attr('href');
		$(target).toggleClass('active');
	});
});