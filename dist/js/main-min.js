$(function(){$(".nav-icon").on("click",function(){$(this).toggleClass(" nav-icon-top"),$(".nav-icon i").toggleClass("fa-arrow-up fa-arrow-down"),$("nav ").slideToggle()}),$(".icon-header ").on("click",function(){$(".sidebar, .content-area ,  .video-dec, .icon-header").toggleClass("no-sidebar")}),$(".sidebar ul .toggle-fullscreen").on("click",function(){$(".sidebar ul .toggle-fullscreen i").toggleClass("fa-compress-alt  fa-compress-arrows-alt"),$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()});var e=document.documentElement;$(" .sidebar ul .reload").on("click",function(){location.reload(!0)}),$(".sidebar ul li").on("click",function(){$(this).addClass("active").siblings().removeClass("active")})});let backColor=localStorage.getItem("back-option");null!==backColor&&(document.documentElement.style.setProperty("--main-dark",localStorage.getItem("back-option")),document.querySelectorAll(".back-color li").forEach(e=>{e.classList.remove("active"),e.dataset.color===backColor&&e.classList.add("active")}));const colorBk=document.querySelectorAll(".back-color li");colorBk.forEach(e=>{e.addEventListener("click",e=>{document.documentElement.style.setProperty("--main-dark",e.target.dataset.color),localStorage.setItem("back-option",e.target.dataset.color),e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")})});let fontColor=localStorage.getItem("color-option");null!==fontColor&&(document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option")),document.querySelectorAll(".font-color li").forEach(e=>{e.classList.remove("active"),e.dataset.color===fontColor&&e.classList.add("active")}));const colorFo=document.querySelectorAll(".font-color li");colorFo.forEach(e=>{e.addEventListener("click",e=>{document.documentElement.style.setProperty("--main-color",e.target.dataset.color),localStorage.setItem("color-option",e.target.dataset.color),e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")})});const form=document.getElementById("form"),firstname=document.getElementById("firstname"),lastname=document.getElementById("lastname"),username=document.getElementById("username"),email=document.getElementById("email"),password=document.getElementById("password"),password2=document.getElementById("password2");function checkInputs(){const e=firstname.value.trim(),t=lastname.value.trim(),o=username.value.trim(),r=email.value.trim(),s=password.value.trim(),a=password2.value.trim();""===e?setErrorFor(firstname,"FirstName Cannot be blank"):setSuccesFor(firstname),""===t?setErrorFor(lastname,"LastName Cannot be blank"):setSuccesFor(lastname),""===o?setErrorFor(username,"UserName Cannot be blank"):setSuccesFor(username),""===r?setErrorFor(email,"Email Cannot be blank"):isEmail(r)?setSuccesFor(email):setErrorFor(email,"Email Is Not valid"),""===s?setErrorFor(password,"password Cannot be blank"):s===e?setErrorFor(password,`Cann't used ${e} Becouse used in First Name`):s===t?setErrorFor(password,`Cann't used ${t} Becouse used in Last Name`):s===o?setErrorFor(password,`Cann't used ${o} Becouse used in User Name`):s===r?setErrorFor(password,"Cann't used Email  in set Password"):setSuccesFor(password),""===a?setErrorFor(password2,"password Cannot be blank"):s!==a?setErrorFor(password2,"Password not same rePassword"):setSuccesFor(password2)}function setErrorFor(e,t){const o=e.parentElement;o.querySelector("small").textContent=t,o.className="parent error "}function setSuccesFor(e){e.parentElement.className="parent success "}function isEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}form.addEventListener("submit",e=>{e.preventDefault(),checkInputs()});
//# sourceMappingURL=main-min.js.map
