$(function(){
	$(document).foundation();

	$('.homepage__slider').slick({
		arrows: false,
		swipe: true,
		autoplay: true
	});

	$('.homepage__slider--arrow-left').click(function () {
	  $('.homepage__slider').slick('prev');
	});

	$('.homepage__slider--arrow-right').click(function () {
	  $('.homepage__slider').slick('next');
	});

	$('.search').click(function () {
	  $('.search-form').fadeIn();
	});
});
