var rightKey, leftKey, topKey, bottomKey;


$(document).ready(function () {
	
	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') { 
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') { 
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') { 
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') { 
			bottomKey();
		}
	});
	
	parallax.add($("#cto"))
			.add($("#index"))
			.add($("#crew"))
			.add($("#innovation"))
			.add($("#culture"))
			.add($("#brown"));
			
	parallax.background = $("body");
	
	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};
	

	//Setting up page navigation
	parallax.index.onload=function(){
		setBottom("cto","Case Study 1");
	};
	
	parallax.cto.onload=function(){
		setBottom("brown", "Case Study 2");
		setTop("index", "");
	};
	
	parallax.brown.onload=function(){
		setBottom("crew", "Case Study 3");
		setTop("cto", "");
	};
	
	parallax.crew.onload=function(){
		setBottom("innovation", "Innovation");
		setTop("brown", "");
	};
	
	parallax.innovation.onload=function(){
		setBottom("culture","Culture");
		setTop("crew", "");
	};
	
	parallax.culture.onload=function(){
		setTop("innovation", "");
	};
	
	
	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){ 
			parallax[page].right(); 
		};
	}
	
	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){ 
			parallax[page].left(); 
		};
	}
	
	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){ 
			parallax[page].top(); 
		};
	}
	
	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){ 
			parallax[page].bottom(); 
		};
	}
	
	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.5);
		$("#bottomText").stop().fadeTo(500,0);
	});
	
	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.5);
		$("#leftText").stop().fadeTo(500,0);
	});
	
	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.5);
		$("#rightText").stop().fadeTo(500,0);
	});
	
	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.5);
		$("#topText").stop().fadeTo(500,0);
	});
	
	
	$(".control").hide();
	parallax.index.show();
	
	
	// MODAL AND SLIDER INITIATION
	
		$(".fancybox").fancybox({
 			maxWidth 	: 500,
 			maxHeight 	: 350,
			width		: '100%',
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			type		: 'inline'
		});
		
		$(".fancybox_cto_video").fancybox({
 			maxWidth 	: 900,
 			maxHeight 	: 510,
			width		: '100%',
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			type		: 'inline'
		});
		
		$(".fancybox_bp_video").fancybox({
 			maxWidth 	: 800,
 			maxHeight 	: 580,
			width		: '100%',
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			type		: 'inline'
		});
		
		$(".fancybox_crew_video").fancybox({
 			maxWidth 	: 800,
 			maxHeight 	: 460,
			width		: '100%',
			fitToView	: true,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			type		: 'inline'
		});
		
		$(".fancybox_slider").fancybox({
			fitToView	: false,
			autoSize	: true,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			type		: 'inline'
		});
		
		$('#slider_culture').rhinoslider({
			controlsPlayPause: false,
			showBullets: 'never',
			showControls: 'hover',
			showCaptions: 'always'
		});
		
		$('#slider_cto').rhinoslider({
			controlsPlayPause: false,
			showBullets: 'never',
			showControls: 'hover',
			showCaptions: 'always'
		});
		
		$('#slider_rooftop').rhinoslider({
			controlsPlayPause: false,
			showBullets: 'never',
			showControls: 'hover',
			showCaptions: 'always'
		});
		
		$('#slider_ultramatte').rhinoslider({
			controlsPlayPause: false,
			showBullets: 'never',
			showControls: 'hover',
			showCaptions: 'always'
		});
		
		$('#slider_social_animals').rhinoslider({
			controlsPlayPause: false,
			showBullets: 'never',
			showControls: 'hover',
			showCaptions: 'always'
		});
		
		$('#slider_bp').rhinoslider({
			controlsPlayPause: false,
			showBullets: 'never',
			showControls: 'hover',
			showCaptions: 'always'
		});


});

