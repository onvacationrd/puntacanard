/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

	/* image-carousel function by = owl.carousel.js */
	jQuery('.img-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	/* image-carousel function by = owl.carousel.js */
	jQuery('.img-carousel-dots').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:false,
		dots:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
	/* image-carousel no margin function by = owl.carousel.js */
	jQuery('.img-carousel-content').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
		
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.blog-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/* Fade slider for home function by = owl.carousel.js */
	jQuery('.owl-fade-one').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		items:1,
		dots: false,
		animateOut:'fadeOut',
	})	
	
	/* testimonial two function by = owl.carousel.js */
	jQuery('.testimonial-two-dots').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots: true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/* testimonial two function by = owl.carousel.js */
	jQuery('.testimonial-center').owlCarousel({
		loop:true,
		center:true,
		margin:0,
		nav:true,
		dots: true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  Our Classes function by = owl.carousel.js */
	jQuery('.team-carousel').owlCarousel({
		center: true,
		autoplay:true,
		items:3,
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
	
	/* image-carousel function by = owl.carousel.js */
	jQuery('.carousel-gallery').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		dots:false,
		navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
		responsive:{
			0:{
				items:4
			},
			480:{
				items:6
			},			
			1024:{
				items:8
			},
			1200:{
				items:10
			}
		}
	})
	
	/* image-carousel function by = owl.carousel.js */
	jQuery('.destination').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:5
			}
		}
	})
	
	/*  testimonial one function by = owl.carousel.js */
	jQuery('.testimonial-one').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:true,
		center:true,
		dots: true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:1
			},
			1000:{
				items:3
			}
		}
	})	
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.listing-slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		stagePadding: 220,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
				stagePadding: 0,
			},
			
			480:{
				items:1,
				stagePadding: 0,
			},			
			
			767:{
				items:1,
				stagePadding: 0,
			},
			1024:{
				items:1,
				stagePadding: 0,
			},
			1200:{
				items:1
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.owl-location-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:3,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="la la-arrow-left"></i>', '<i class="la la-arrow-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.popular-cities-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:8,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.slider-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:true,
		dots: false,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['prev', 'next'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			991:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
});
/* Document .ready END */