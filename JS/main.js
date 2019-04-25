$(function () {
   'use strict';
    
    //nice scroll
    
    $(function() {  
    $("html").niceScroll();
        
    cursorcolor: "#080";
        
});


    
    //Adjust slider height
    var WinH = $(window).height(),
        UpperH = $('.upper-bar').innerHeight(),
        NavH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(WinH - (UpperH + NavH) );
    
    
    
    //Features Work shuffle
    
    $('.featured-work ul li').on('click', function () {
        
       $(this).addClass('active').siblings().removeClass('active'); 
        
        if ($(this).data('class') === 'all') {
    
        $('.shuffle-imgs .col-md').css('opacity', 1);
            
        } else {
            
         $('.shuffle-imgs .col-md').css('opacity', '.08');
            
            $($(this).data('class')).parent().css('opacity', 1);
            
        }  
   });
    
    
});

//loading page
$(window).on('load', function()
{
    
    //loading Elements
    
   $(".loading-overlay .spinner").fadeOut(2000,
                                    
    function()
   {
      
        //show the scroll
    
     $("body").css("overflow","auto");
       
       
     $(this).parent().fadeOut(2000,
      
     function(){
         
         $(this).remove();
     });   
       
   }); 
});