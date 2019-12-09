import $ from 'jquery';

$(document).ready(function() {
	const scrollLink = $('.scroll');
	const heroLink = $('.hero-scroll');

	// Change color on scroll
	if (
		'IntersectionObserver' in window &&
		'IntersectionObserverEntry' in window &&
		'intersectionRatio' in window.IntersectionObserverEntry.prototype
	) {
		let observer = new IntersectionObserver((entries) => {
			if (entries[0].boundingClientRect.y < 0) {
				document.querySelector('#main-nav').classList.add('scrolled');
			} else {
				document.querySelector('#main-nav').classList.remove('scrolled');
			}
		});
		observer.observe(document.querySelector('#pixel-anchor'));
	}

	// Smooth scrolling
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top
		});
	});

	heroLink.click(function(e) {
		e.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top
		});
	});

	// Active link
	$(window).scroll(function() {
		let location = $(this).scrollTop();

		scrollLink.each(function() {
			let sectionOffset = $(this.hash).offset().top;

			if (sectionOffset <= location) {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			}
		});
	});
});
