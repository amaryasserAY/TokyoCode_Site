$(window).on("load",function(){$("html,body").animate({scrollTop:0}),$("body").css("overflow","auto"),$(".loading").fadeOut(2e3)}),$(function(){(new WOW).init(),$(".option-toggle, .option-close").on("click",function(e){e.preventDefault(),$(".option-box").slideToggle()}),$(".icon-header ").on("click",function(){$(".sidebar, .content-area ,  .video-dec, .icon-header").toggleClass("no-sidebar")}),$(".sidebar ul .toggle-fullscreen").on("click",function(){$(".sidebar ul .toggle-fullscreen i").toggleClass("fa-compress-alt  fa-compress-arrows-alt"),$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()});var e=document.documentElement;$(" .sidebar ul .reload").on("click",function(){location.reload(!0)}),$(".sidebar ul li").on("click",function(){$(this).addClass("active").siblings().removeClass("active")});var o=[];null!==localStorage.getItem("font-option")&&$("body").addClass(localStorage.getItem("font-option"));var t=document.getElementById("font-controls");null!==localStorage.font&&(t.value=localStorage.font),$(".option-font select option").each(function(){o.push($(this).val())}),$(".option-font select").on("change",function(){$("body").removeClass(o.join(" ")).addClass($(this).find("option:selected").val()),localStorage.setItem("font-option",$(this).find("option:selected").val()),localStorage.font=this.value}),document.getElementById("reset").onclick=function(){localStorage.clear(),window.location.reload()},$("html").niceScroll({cursorcolor:"var(--main-color)",cursorwidth:"15px",cursorborder:"1px solid var(--main-color)",autohidemode:"leave",cursoropacitymin:.4});var l=$("#scroll-top");$(window).on("scroll",function(){$(this).scrollTop()>=700?l.show():l.hide()}),l.click(function(){$("html,body").animate({scrollTop:0},600)})});let backColor=localStorage.getItem("back-option");null!==backColor&&(document.documentElement.style.setProperty("--main-dark",localStorage.getItem("back-option")),document.querySelectorAll(".back-color li").forEach(e=>{e.classList.remove("active"),e.dataset.color===backColor&&e.classList.add("active")}));const colorBk=document.querySelectorAll(".back-color li");colorBk.forEach(e=>{e.addEventListener("click",e=>{document.documentElement.style.setProperty("--main-dark",e.target.dataset.color),localStorage.setItem("back-option",e.target.dataset.color),e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")})});let fontColor=localStorage.getItem("color-option");null!==fontColor&&(document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option")),document.querySelectorAll(".font-color li").forEach(e=>{e.classList.remove("active"),e.dataset.color===fontColor&&e.classList.add("active")}));const colorFo=document.querySelectorAll(".font-color li");colorFo.forEach(e=>{e.addEventListener("click",e=>{document.documentElement.style.setProperty("--main-color",e.target.dataset.color),localStorage.setItem("color-option",e.target.dataset.color),e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")})});
//# sourceMappingURL=main-min.js.map
