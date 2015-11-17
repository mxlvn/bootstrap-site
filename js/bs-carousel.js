$(document).ready(function(){
  $('.carousel').carousel();
  $('.carousel').on('slid', function() {
    var to_slide = $('.carousel-inner .item.active').attr('id');
    $('.carousel-indicators').children().removeClass('active');
    $('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
  });
});

$('body').scrollspy({ target: '#navbar-example' })