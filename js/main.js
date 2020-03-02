jQuery(document).ready(function($) {


	// Код для каверов в блоке .ingridients (сырой)

	// var base = $('.ingredient-item');
	// var cover = $('.ingredient-item .cover');

	// base.hover(function() {
	// 	$(cover).addClass('active');
	// }, function() {
	// 	$(cover).removeClass('active');
	// });

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

