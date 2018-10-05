$('.owl-carousel.header-wow').owlCarousel({
	loop: true,
	margin: 0,
	nav: false,
	dots: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	touchDrag: false,
	mouseDrag: false,
	items: 1,
	autoplay: true,
	autoplayTimeout: 5000
});
var clipboard1 = new ClipboardJS('.s-copy1');
clipboard1.on('success', function (e) {
	if(window.location.hash.replace("#","") != "" && $('.s-copy1').text() != "Скопировано") { 
		$.ajax({
			   type: "POST",
			   url: "/api/copy_server",
			   data: {server: 1, name: window.location.hash.replace("#","")},
		});
	}
	else if(window.location.pathname == "/welcome")
	{
		$.ajax({
			   type: "POST",
			   url: "/api/copy_server",
			   data: {server: 1, name: "welcome"},
		});
	}
	$('.s-copy1').text('Скопировано');
});
var clipboard2 = new ClipboardJS('.s-copy2');
clipboard2.on('success', function (e) {
	if(window.location.hash.replace("#","") != "" && $('.s-copy2').text() != "Скопировано") { 
		$.ajax({
			   type: "POST",
			   url: "/api/copy_server",
			   data: {server: 2, name: window.location.hash.replace("#","")},
		});
	}
	else if(window.location.pathname == "/welcome")
	{
		$.ajax({
			   type: "POST",
			   url: "/api/copy_server",
			   data: {server: 2, name: "welcome"},
		});
	}
	$('.s-copy2').text('Скопировано')
});