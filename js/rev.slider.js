var dzrevapi;
var dzQuery =jQuery;
function dz_rev_slider_1(){
	if(dzQuery("#rev_slider_265_1").revolution == undefined){
	  revslider_showDoubleJqueryError("#rev_slider_265_1");
	}else{
	  dzrevapi = dzQuery("#rev_slider_265_1").show().revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation: "on",
			keyboard_direction: "horizontal",
			mouseScrollNavigation: "off",
			onHoverStop: "off",
			touch: {
				touchenabled: "on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows: {
				style: "gyges",
				enable: true,
				hide_onmobile: false,
				hide_onleave: false,
				tmp: '',
				left: {
					h_align: "left",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				},
				right: {
					h_align: "right",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				}
			},
		},
		visibilityLevels:[1240,1024,778,480],
		gridwidth:1920,
		gridheight:766,
		lazyType:"none",
		shadow:0,
		spinner:"spinner0",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		disableProgressBar:"on",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
		  simplifyAll:"off",
		  nextSlideOnWindowFocus:"off",
		  disableFocusListener:false,
		}
	  });
	}
}
function dz_rev_slider_2(){
	if(dzQuery("#rev_slider_1083_1").revolution == undefined){
	revslider_showDoubleJqueryError("#rev_slider_1083_1");
	}else{
	dzrevapi = dzQuery("#rev_slider_1083_1").show().revolution({
	sliderType:"standard",
	jsFileLocation:"plugins/revolution/revolution/js/",
	sliderLayout:"auto",
	dottedOverlay:"none",
	delay:6000,
	navigation: {
		keyboardNavigation:"off",
		keyboard_direction: "horizontal",
		mouseScrollNavigation:"off",
		mouseScrollReverse:"default",
		onHoverStop:"off",
		touch:{
			touchenabled:"on",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			swipe_direction: "horizontal",
			drag_block_vertical: false
		}
		,
		bullets: {
			enable:true,
			hide_onmobile:true,
			hide_under:600,
			style:"hermes",
			hide_onleave:true,
			hide_delay:200,
			hide_delay_mobile:1200,
			direction:"vertical",
			h_align:"right",
			v_align:"center",
			h_offset:30,
			v_offset:0,
			space:5,
			tmp:''
		}
	},
	viewPort: {
		enable:true,
		outof:"pause",
		visible_area:"80%",
		presize:false
	},
	responsiveLevels:[1240,1024,778,480],
	visibilityLevels:[1240,1024,778,480],
	gridwidth:[1240,1024,778,480],
	gridheight:[600,600,500,400],
	lazyType:"none",
	parallax: {
		type:"mouse",
		origo:"slidercenter",
		speed:2000,
		levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
		type:"mouse",
	},
	shadow:0,
	spinner:"off",
	stopLoop:"off",
	stopAfterLoops:-1,
	stopAtSlide:-1,
	shuffle:"off",
	autoHeight:"off",
	hideThumbsOnMobile:"off",
	hideSliderAtLimit:0,
	hideCaptionAtLimit:0,
	hideAllCaptionAtLilmit:0,
	debugMode:false,
	fallbacks: {
		simplifyAll:"off",
		nextSlideOnWindowFocus:"off",
		disableFocusListener:false,
	}
	});
	}
}