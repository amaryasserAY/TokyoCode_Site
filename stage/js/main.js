$(window).on('load', function () {

  $("html,body").animate({ scrollTop: 0 });
  $("body").css("overflow", "auto");
  $(".loading").fadeOut(2000);
    
  

});



          

$(function () {
    





  

new WOW().init();




  $(".option-toggle, .option-close").on("click", function (e) {
    e.preventDefault();

    $(".option-box").slideToggle();


    
  });







  $('.icon-header ').on("click", function () {
    
    $('.sidebar, .content-area ,  .video-dec, .icon-header').toggleClass('no-sidebar');
    



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

  $('.sidebar ul li').on('click', function () {
    
    $(this).addClass('active').siblings().removeClass('active');

  });




// Switsh option-font
  var fontClasses = [];
  

let fonto = localStorage.getItem("font-option");


if(fonto !== null){

   $('body').addClass(localStorage.getItem("font-option"));

 

  }
  

   
    var fontControls = document.getElementById("font-controls");

 

    if (localStorage['font'] !== null) {

      fontControls.value = localStorage['font'];
    } 



  

  $(".option-font select option").each(function () {
    

    fontClasses.push($(this).val());

  });

  $(".option-font select").on('change', function () {
    

  



    $('body').removeClass(fontClasses.join(" ")).addClass($(this).find("option:selected").val());

localStorage.setItem("font-option", $(this).find("option:selected").val());

   localStorage['font'] = this.value;

  });


// Start Reset Button
  
  
  document.getElementById("reset").onclick = function () {
    
    localStorage.clear();
    window.location.reload();

  };


// $("html").niceScroll({
//   cursorcolor:"var(--main-color)",
//   cursorwidth:"15px",
//   cursorborder:"1px solid var(--main-color)",
//   autohidemode: 'leave',
//   cursoropacitymin: 0.4

// });  // a world full of color!



// Start Scroll To Top

    
  var scrollButton = $("#scroll-top");// Cash


  $(window).on('scroll',function () {

    if ($(this).scrollTop() >= 700) {

      scrollButton.show();

    } else{
      scrollButton.hide();
  }
    

    
  });
scrollButton.click(function () {
  
      $("html,body").animate({ scrollTop: 0 },600);

    });
  
});//End Jquery

// =============================================== Chek Local Storage
let backColor = localStorage.getItem("back-option");

if (backColor !== null) {
  document.documentElement.style.setProperty('--main-dark', localStorage.getItem("back-option"));


   document.querySelectorAll('.back-color li').forEach(element => {

element.classList.remove('active');


     if (element.dataset.color === backColor) {
       
  element.classList.add('active');
}
     

    });

}


// Start Option-Box 



const colorBk = document.querySelectorAll('.back-color li');



colorBk.forEach(li => {
  
  li.addEventListener("click", (e) => {
  
    document.documentElement.style.setProperty('--main-dark', e.target.dataset.color);


    //Set Color onRoot

localStorage.setItem("back-option", e.target.dataset.color);

// Reamove active class from all
    
    e.target.parentElement.querySelectorAll('.active').forEach(element => {

element.classList.remove('active');

    });
    
// Add class Active
    
    e.target.classList.add('active');
    

  });

});
// =======================
// Font-Color=======================================================
let fontColor = localStorage.getItem("color-option");

if (fontColor!== null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));

   document.querySelectorAll('.font-color li').forEach(element => {

element.classList.remove('active');


     if (element.dataset.color === fontColor) {

  element.classList.add('active');
}
     

    });

}




const colorFo = document.querySelectorAll('.font-color li');

colorFo.forEach(li => {
  
  li.addEventListener("click", (e) => {
  
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    //Set Color onRoot

    localStorage.setItem("color-option", e.target.dataset.color);
    
// Reamove active class from all
    
    e.target.parentElement.querySelectorAll('.active').forEach(element => {

element.classList.remove('active');

    });
    
// Add class Active
    
    e.target.classList.add('active');

  });

});

























