$(function(){$(".nav-icon").on("click",function(){$(this).toggleClass(" nav-icon-top"),$(".nav-icon i").toggleClass("fa-arrow-up fa-arrow-down"),$("nav ").slideToggle()}),$(".icon-header ").on("click",function(){$(".sidebar, .content-area ,  .video-dec, .icon-header").toggleClass("no-sidebar")}),$(".sidebar ul .toggle-fullscreen").on("click",function(){$(".sidebar ul .toggle-fullscreen i").toggleClass("fa-compress-alt  fa-compress-arrows-alt"),$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()});var e=document.documentElement;$(" .sidebar ul .reload").on("click",function(){location.reload(!0)}),$(".sidebar ul li").on("click",function(){$(this).addClass("active").siblings().removeClass("active")})});const form=document.getElementById("form"),firstname=document.getElementById("firstname"),lastname=document.getElementById("lastname"),username=document.getElementById("username"),email=document.getElementById("email"),password=document.getElementById("password"),password2=document.getElementById("password2");function checkInputs(){const e=firstname.value.trim(),s=lastname.value.trim(),r=username.value.trim(),t=email.value.trim(),n=password.value.trim(),a=password2.value.trim();""===e?setErrorFor(firstname,"FirstName Cannot be blank"):setSuccesFor(firstname),""===s?setErrorFor(lastname,"LastName Cannot be blank"):setSuccesFor(lastname),""===r?setErrorFor(username,"UserName Cannot be blank"):setSuccesFor(username),""===t?setErrorFor(email,"Email Cannot be blank"):isEmail(t)?setSuccesFor(email):setErrorFor(email,"Email Is Not valid"),""===n?setErrorFor(password,"password Cannot be blank"):n===e?setErrorFor(password,`Cann't used ${e} Becouse used in First Name`):n===s?setErrorFor(password,`Cann't used ${s} Becouse used in Last Name`):n===r?setErrorFor(password,`Cann't used ${r} Becouse used in User Name`):n===t?setErrorFor(password,"Cann't used Email  in set Password"):setSuccesFor(password),""===a?setErrorFor(password2,"password Cannot be blank"):n!==a?setErrorFor(password2,"Password not same rePassword"):setSuccesFor(password2)}function setErrorFor(e,s){const r=e.parentElement;r.querySelector("small").textContent=s,r.className="parent error "}function setSuccesFor(e){e.parentElement.className="parent success "}function isEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}form.addEventListener("submit",e=>{e.preventDefault(),checkInputs()});
//# sourceMappingURL=main-min.js.map
