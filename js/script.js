

$(document).ready(function() {
	// Burger menu
	$('.icon-menu').click(function(evt) {
		$('.icon-menu ,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
// Adaptive img
function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}

	ibg();
	// Slider
	if ($('.slider__body').length>0){
		$('.slider__body').slick({
			// autoplay: true,
			// infinite: false,
			dots: true,
			arrows: false,
			accessibility: false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive:[{
					breakpoint: 768,
					settings: {}
				}]	
		});
	}
});



/*//=================-vanill_js-===================
// Burger menu
let burger = document.querySelector(".icon-menu");
let menu = document.querySelector(".menu__body");
let body = document.querySelector("body");
burger.addEventListener('click', function(evt){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock');
})

// Adaptive img
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
		}
	}
}
ibg();
*/