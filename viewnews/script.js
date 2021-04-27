// Главное меню

const nav = document.getElementById('nav')

nav.addEventListener('click', function(e) {
    const target = e.target;

    const targetParent = target.closest('.menu-item')

    if (targetParent) {
        const subm = targetParent.getElementsByClassName('submenu')[0]
        close()

        if (subm) {
            subm.style.display = 'block';
        }
  }
});

function close() {
    const s = document.getElementsByClassName('submenu')
    
    for (var i = 0; i < s.length; i++) {
        s[i].style.display = 'none';
  }
}

//owl-carousel
$(document).ready(function() {
 
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