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
	})

});