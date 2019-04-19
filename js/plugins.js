// Show Color Option Div When Click On The Gear
/*global $, jQuery, alert*/
$(".gear-check").click(function () {
    "use strict";
    $(".color-option").fadeToggle();
    
});

// Change Theme Color On Click

var colorLi = $(".color-option ul li");

colorLi.eq(0).css("backgroundColor", "#E60024").end()

       .eq(1).css("backgroundColor", "#E426D5").end()

       .eq(2).css("backgroundColor", "#009AFF");

    
colorLi.click(function () {
    "use strict";
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});


// Caching The Scroll Top Element

var scrollButton = $("#scroll-top");

$(window).scroll(function () {
    "use strict";
    if ($(this).scrollTop() >= 700) {
        
        scrollButton.show();
        
    } else {
        
        scrollButton.hide();
    }
});

// Click On Button To Scroll Top

scrollButton.click(function () {
    "use strict";
    $("html,body").animate({ scrollTop : 0 }, 600);
});

//Loaading Screen

$(window).load(function () {
    "use strict";
	// $(".loading-overlay, .loading-overlay .spinner").fadeOut(2000); });

	// Show the scroll
	$("body").css("overflow", "auto");

	$(".loading-overlay .spinner").fadeOut(1000,
		function () {
			$(this).parent().fadeOut(1000,
				function () {

					$(this).remove();
				});
		});
});