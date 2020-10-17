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


});
//# sourceMappingURL=main.js.map
