$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    const btn = document.querySelector(".btn-toggle");
    // Listen for a click on the button
    btn.addEventListener("click", function() {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle("dark-theme");
    });
    //dark mode button toggle
    $("#darkMode").click(function () {
        $("#darkMode").toggleClass("fa-sun");
    });
    // const icon = document.querySelector(".fas fa-home");
    // icon.addEventListener("click", function() {
    //     icon.classList.toggle("fas fa-moon");
    // }
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
