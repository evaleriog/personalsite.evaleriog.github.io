"use strict";
//Start of IIFE
(function (){
    //variables for carousel in section about me
    var slideIndex = 0;
    showSlides();

    $('.display_menu').click(function () {
        $('.show').toggle();
    });

    $('.display_message').click(function () {
        $('.message').show();
    });

    $('.project_hover_text').click(function () {
        $(this).next('.project_info').slideToggle(500);
    });

    $('.project_image').click(function () {
        $(this).next('.project_info').slideToggle(500);
    });

    $('.project_info').click(function () {
        $(this).slideToggle(500);
    });

    $('#cancel').click(function (e) {
        e.preventDefault();

        $('#name').val("");
        $('#email').val("");
        $('#message').val("");

        $('.message').hide();
    });

    $('.resume').click(function (e) {
        e.preventDefault();

        $('.resume_view').show();
    });

    $('.close_resume').click(function (e) {
        e.preventDefault();

        $('.resume_view').hide();
    });

    $('.menu_links').click(function (e) {
        if(this.hash !== ""){
            e.preventDefault();

            var hash = this.hash;

            $('html, body').animate({scrollTop: $(hash).offset().top}, 900, function () {
                window.location.hash = hash;
            });
        }//end if
    });
    // Section for ABOUT ME Carousel
    function showSlides(){
        var slides = document.getElementsByClassName("slider");

        for(var i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }

        slideIndex++;

        if(slideIndex > slides.length){
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000);
    }




})(); //End of IIFE
