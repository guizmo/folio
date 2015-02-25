jQuery(document).ready(function($) {


//$('#logo').load('js/jquery.min.1.7.2.js');

$.get('js/jquery.min.1.7.2.js', function(data) {
  $('#logo').text(data);
});



$.fn.getBgImage = function(callback) {
    var height = 0;
    var path = $(this).css('background-image').replace('url', '').replace('(', '').replace(')', '').replace('"', '').replace('"', '');
    var tempImg = $('<img id="tempimg" />');
    tempImg.hide(); //hide image
	tempImg.bind('load', function(e) {
    	callback.call(this, e);
    	tempImg.remove();
	});
	$('body').append(tempImg);
	tempImg.attr('src', path);
};


// usage
$("#logo").getBgImage(function() {
    $("#top").height($(this).height());
});

$(window).resize(function (event){
	$("#logo").getBgImage(function() {
	    $("#top").height($(this).height());
	});
});

});