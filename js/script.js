$(document).ready(function(){
	
	$(".dropdownTrigger").click(function (e) {
		e.preventDefault();
		var dropdown = $(this).attr("href");
		$(dropdown).toggleClass("showDropdownContent");
		console.log(dropdown);
	});
	$("html").click(function () {
		$(".dropdownContent").removeClass("showDropdownContent");
	});
	$(".dropdown").click(function  (event) {
		event.stopPropagation();
	})

	
	$(".tabcontainer ul > li:first-child a").addClass("current");
	$(".tabs .tab").hide();
	$(".tabs .tab:first-child").show();

	$(".tabcontainer > ul > li  a").click(function () {
		$(".tabcontainer a").removeClass("current");
		$(this).addClass("current");
		var currentTab = $(this).attr("href");
		$(".tabs .tab").hide();
		$(currentTab).show();
		return false;
	});

$('a[rel=tooltip]').mouseover(function(e) {
        var tip = $(this).attr('title');   
        $(this).attr('title','');
        $(this).append('<div id="tooltip"><div class="tipBody">' + tip + '</div></div>');    
         
        $('#tooltip').css('top', e.pageY + 10 );
        $('#tooltip').css('left', e.pageX + 20 );
         
        $('#tooltip').fadeIn('500');
        $('#tooltip').fadeTo('10',0.8);
         
    }).mousemove(function(e) {
     
        $('#tooltip').css('top', e.pageY + 10 );
        $('#tooltip').css('left', e.pageX + 20 );
         
    }).mouseout(function() {
     
        $(this).attr('title',$('.tipBody').html());
        $(this).children('div#tooltip').remove();
         
    });

    $(".dismissLink").click(function (event) {
    	$(this).parent(".dismiss").fadeOut();
    	event.preventDefault();
    })

});