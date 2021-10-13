$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	$('.js-portfolio-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.js-portfolio-slider-btn-prev'),
		nextArrow: $('.js-portfolio-slider-btn-next'),
		fade: false,
		asNavFor: '.js-portfolio-thumbnails',
		infinite: true
	});

	$('.js-portfolio-thumbnails').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-portfolio-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		vertical: true,
		focusOnSelect: true,

		
	});

	var delay = 0;
	$('.title span').each(function() {
		
		$(this).css('transition-delay', delay + 's');

		delay+= 0.15;
	})


	$('[data-fancybox]').fancybox({'gallery': true, 'loop': true});

	var animatedBlockVisibility = false;


	var animationBlocks = $('.js-animation-block').toArray();

	function animateElements() {
		var documentScroll = $(document).scrollTop();
		var scroll = $(this).scrollTop();
		var windowHeight = $(window).height();

		animationBlocks.forEach(function(item) {
			var itemOffset = $(item).offset().top;
			var itemHeight = $(item).outerHeight();
			var visibilityPoint = itemOffset - windowHeight;

			if (documentScroll > visibilityPoint) {
				$(item).addClass('is-animated');
			}

		});
	}

	animateElements();

	$(window).on('scroll', function() {
		animateElements();
	});



	gsap.registerPlugin(ScrollTrigger);

	TweenLite.defaultEase = Power0.easeNone;

	var lines = gsap.utils.toArray('.program-progress__line');

	var tl_1 = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-program-step-1',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			toggleClass: 'is-active',
			markers: false
			
		}
	});

	var tl_2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-program-step-2',
			start: 'top 20px top',
			end: 'bottom top',
			scrub: true,
			toggleClass: 'is-active',
			markers: false
			
		}
	});

	var tl_3 = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-program-step-3',
			start: 'top 20px top',
			end: 'bottom top',
			scrub: true,
			toggleClass: 'is-active',
			markers: false
			
		}
	});

	tl_1.from($('.js-program-step-1 .program-progress__line') , 1, {
		y: '-101%'
	});

	tl_2.from($('.js-program-step-2 .program-progress__line') , 1, {
		y: '-101%'
	});

	tl_3.from($('.js-program-step-3 .program-progress__line') , 1, {
		y: '-101%'
	});


	var delay = 0;
	$('.title span').each(function() {
		
		$(this).css('transition-delay', delay + 's');

		delay+= 0.15;
	});


	
	$('.sect-title, .sect-uptitle, .sect-title-sm, .price-block__title').each(function() {
		var self = $(this);

		var words = self.text().split('');

		var sectSpanDelay = 0;


		self.find('span').each(function() {
			$(this).css('transition-delay', sectSpanDelay + 's');

			sectSpanDelay+= 0.12;
		});
	});


	var galleryItemDelay = 0;
	
	$('.gallery-item').each(function() {
		
		$(this).css('transition-delay', galleryItemDelay + 's');

		galleryItemDelay+= 0.12;
	
	});


	


	// Parallax

	function parallax(item){
		var scrolled = $(window).scrollTop();
		var speed = $(item).attr('data-parallax-speed');
		var direction = $(item).attr('data-parallax-direction');



		if(direction === 'horisontal-right') {
			$(item).css({
				'transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'horisontal-left') {
			$(item).css({
				'transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'vertical-top') {
			$(item).css({
				'transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)'
			});
		} else if(direction === 'vertical-bottom') {
			$(item).css({
				'transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)'
			});
		}
		

	}



	$(window).on('scroll', function(e) {
		var scroll = $(this).scrollTop();

		$('.js-item-parallax').each(function() {
			
			parallax($(this));
			
		});

		
	});




	


});

$(window).on('load', function() {
	$('body').addClass('is-loaded');

	setTimeout(function() {


		$('.promo-block .decor-square').addClass('is-animated');
		$('.promo-block .promo-block__imgs-img').addClass('is-animated');
		$('.promo-block .promo-block__imgs-main').addClass('is-animated');
		$('.promo-block .city').addClass('is-animated');
		$('.promo-block .form__wrapper').addClass('is-animated');
		$('.promo-block .course-info__item').addClass('is-animated');
		$('.promo-block .title').addClass('is-animated');

	}, 800);
	
});
