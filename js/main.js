// Animation for 'saiba mais' transition
jQuery(document).ready(function() {
  $(".scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});

// Script for sent form message
// jQuery(document).ready(function() {
//   $("#professional button").click(function () {
//     $("#professional h3").css('display' , 'block');
//     $("#professional form").css('display' , 'none');
//   });
// });