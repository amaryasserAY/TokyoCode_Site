$(function () {
    

    $('.nav-icon').on("click",function () {
    
        $(this).toggleClass(' nav-icon-top');
        $(".nav-icon i").toggleClass("fa-arrow-up fa-arrow-down");



        $("nav ").slideToggle();



    });




    $('.icon-header ').on("click",function () {
    
        $('.sidebar, .content-area ,  .video-dec').toggleClass('no-sidebar');
    



    });


/// Start Bx Slider



  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
      slideWidth:900,
     
    controls:false
  });





  // Start toggle-features


$('.features .title i ').on('click',function(){
  $(this).toggleClass("fa-arrow-alt-circle-up  fa-arrow-alt-circle-down");
  $('.toggle-features').slideToggle();

});

 // Start toggle-coming-soon

  
  
$('.coming-soon .title i ').on('click',function(){
  $(this).toggleClass("fa-arrow-alt-circle-up  fa-arrow-alt-circle-down");
  $('.toggle-coming').slideToggle();

});


});
//# sourceMappingURL=main.js.map
