function show() { 
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		//$('#desktop-content-wrapper').css('visibility','visible');
	} else {
		$('#desktop-content-wrapper').css('visibility','visible');
	}
};
    
//Slidebar
$(document).ready(function() {
	$.slidebars();
});
      
// Image hover with bottom caption & caption
$("[rel='tooltip']").tooltip(); 
$('#hover-img .thumbnail').hover( 
	function () {
	$(this).find('.caption').slideDown(250); 
	$(this).find('.caption-btm').hide(250);
}, 
    function () { 
    	$(this).find('.caption').slideUp(250); 
    	$(this).find('.caption-btm').show(250); 
});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56442911-1', 'auto');
ga('send', 'pageview');