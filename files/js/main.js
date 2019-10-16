$(document).ready(function() {
  $('.preloader').fadeOut();

}); // END DOCUMENT READY

// SWIPER


var galleryThumbs = new Swiper('#slide-thumb', {
  spaceBetween: 10,
  slidesPerView: 5,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  breakpoints: {  

    768: {       
      slidesPerView: 3,
      spaceBetween: 10     
    },     

  } ,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('#slide-detail', {
 effect: 'slide',
 spaceBetween: 10,
 zoom:true,
 loop:true,
 navigation: {
  nextEl: '.btn-next',
  prevEl: '.btn-prev',
},
pagination: {
  el: '.number-image',
  type:'fraction',
  renderFraction: function (currentClass, totalClass) {
    return '<span class="' + currentClass + '"></span>' +
    ' of ' +
    '<span class="' + totalClass + '"></span>';
  }
},
thumbs: {
  swiper: galleryThumbs
}
});

// END SWIPER

// TOOLTIP
$('#slide-detail').tooltip();
// END TOOLTIP

// DISABLE RIGHT CLICK
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);
// DISABLE RIGHT CLICK


