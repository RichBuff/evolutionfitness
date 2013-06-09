
    function initPage(args) {
   		$("a[rel^='prettyPhoto']").prettyPhoto({
			autoplay_slideshow: true
		});
		
   		$('.menu ul li').hover(
		function () {
			$('.sub_menu', this).stop(true, true).slideDown(); /*slideDown the subitems on mouseover*/
		}, function () {
		    $('.sub_menu', this).stop(true, true).slideUp();  /*slideUp the subitems on mouseout*/
		});

        handleWidth();
    }

	function showSarah() {
	    var api_gallery = ['images/sarah/tough-enough.jpeg', 'images/sarah/meandsarah.jpeg', 'images/sarah/oysterrace1.png', 'images/sarah/upside-down.jpeg'];
		var api_titles=['Introducing Sarah Bird','Sarah and Jill','At the Oyster Race','image 4'];
		var api_descriptions=['Description 1','Description 2','Description 3','Desc 4'];
		
		$.prettyPhoto.open(api_gallery, api_titles, api_descriptions);
		return false;
	}

function handleWidth() {
    var wi = $($("#menu")).width();
    if (wi < 530) {
        $("#trainers").html("The Trainers");
        $("#menu ul li a").addClass("smaller-font");
    }
    else {
        $("#trainers").html("Meet The Trainers");
        $("#menu ul li a").removeClass("smaller-font");        
    }
}
