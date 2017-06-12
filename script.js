$(document).ready(function(){
	$('.navlist').on('click',function(){
		$('.navlist').removeClass('active');
		$(this).addClass('active');
		$('.tab-pane').removeClass('in active');
		var tabid = $(this).data("id");
		$('#'+ tabid).addClass("in active");
		// console.log($(this).data("id"));
	})

	$('#closeWidget').on('click',function(){
		hideWidget();
	})
	$('#openWidget').on('click',function(){
		showWidget();
	})
	function hideWidget() {
		$('.widget').addClass('godown');
		$('.widgetopen').removeClass('godown');
	}
	function showWidget() {
		$('.widgetopen').addClass('godown');
		$('.widget').removeClass('godown');	
	}
	$('#mailForm').submit(function(e){
		e.preventDefault();
		console.log("try");
		$('.alert').fadeIn();
		setTimeout(function(){
		  $('.alert').fadeOut();
		}, 2000);
	})
});