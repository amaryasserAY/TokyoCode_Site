$(function () {
    

    $('.nav-icon').on("click",function () {
    
        $(this).toggleClass(' nav-icon-top');
        $(".nav-icon i").toggleClass("fa-arrow-up fa-arrow-down");



        $("nav ").slideToggle();



    });




    $('.icon-header ').on("click",function () {
    
        $('.sidebar, .content-area ,  .video-dec, .icon-header').toggleClass('no-sidebar');
    



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


  

// =================================Toggle FullScreen===============================//



  $(".sidebar ul .toggle-fullscreen").on('click', function () {
    
    $('.sidebar ul .toggle-fullscreen i').toggleClass('fa-compress-alt  fa-compress-arrows-alt');
    $(this).toggleClass('full-screen');

    if ($(this).hasClass('full-screen')) {

openFullscreen(); 
 

    } else {
closeFullscreen();
  
    }

  });
  
  
  /* Get the documentElement (<html>) to display the page in fullscreen */
  
  var elem = document.documentElement;

     /* View in fullscreen */
      function openFullscreen() {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
      
        /* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
  // =================================Toggle FullScreen===============================//



// Hard Reload 

  $(' .sidebar ul .reload').on('click', function () {
    
    location.reload(true);

  });

  $(' .side-nav ul li').on('click', function () {
    
    $(this).addClass('active').siblings().removeClass('active');

  });



















});