function show() { 
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		//$('#desktop-content-wrapper').css('visibility','visible');
	} else {
		$('#desktop-content-wrapper').css('visibility','visible');
	}
};
//TODO cleanup
window.onload = function(){
vph = $(window).height();
vpw = $(window).width();
$('.container-full').height(vph);
content_w = $('.content_work').height();
content_c = $('.content_contact').height();
content_h = $('.content_about').height();  
if(content_w>vph)
{
$('#work').css('height', 'auto');
}
else
{
$('#work').css('height', vph);
if(vpw>767){
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if(!isiPad){
$('.content_work').css('padding-top',(vph-content_w)/2); 
}
}	
}
if(content_c>vph)
{
$('#contact').css('height', 'auto');
}
else
{
$('#contact').css('height', vph);
if(vpw>767){

$('.content_footer').css('padding-top',(vph-content_c)/2);
}
}
if(content_h>vph)
{
$('#about').css('height', 'auto');
}
else
{
$('#about').css('height', vph);
if(vpw>767){
$('.content_about').css('padding-top',(vph-content_h)/2);	
}	
}
show();
};

	
	//Side Menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $('.side_name').toggleClass("active");
    });
    
    //Slidebar
	(function($) {
		$(document).ready(function() {
			$.slidebars();
		});
	}) (jQuery);
      
   // Image hover with bottom caption & caption
      $("[rel='tooltip']").tooltip(); 

      $('#hover-img .thumbnail').hover( function () { $(this).find('.caption').slideDown(250); $(this).find('.caption-btm').hide(250);
      }, function () { $(this).find('.caption').slideUp(250); $(this).find('.caption-btm').show(250); });

      // Google Analytics
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-56442911-1', 'auto');
        ga('send', 'pageview');
