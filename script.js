// Главное меню

// const nav = document.getElementById('nav')

// nav.addEventListener('click', function(e) {
//     const target = e.target;

//     const targetParent = target.closest('.menu-item')

//     if (targetParent) {
//         const subm = targetParent.getElementsByClassName('submenu')[0]
//         close()

//         if (subm) {
//             subm.style.display = 'block';
//         }
//   }
// });

// function close() {
//     const s = document.getElementsByClassName('submenu')
    
//     for (var i = 0; i < s.length; i++) {
//         s[i].style.display = 'none';
//   }
// }

$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<span class=\"menu-mobile\">МЕНЮ:</span>");
    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 768) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").click(function() {
        if ($(window).width() <= 768) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });

    //Форма авторизации

    $("#auth").click(function(e){
        $(".authorization-form").fadeIn(1000);
        e.preventDefault();
    })

    $(".close-btn").click(function(e){
        $(".authorization-form").fadeOut(1000);
    })
    

    //owl-carousel
 
    $(".owl-carousel").owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:20,
        responsive:{
            600:{
                items:3
            }
        }
    });
   
  });