
  $(function () {
    $('.slider_work').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
      
    });
        
  });

  $(function () {
    $('.slider_gallery').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
      
    });
        
  });





  $(function(){
    $('.mainvisual').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      });
  });



  

$(function(){
  $(".hamburger").click(function (){
    $(".hamburger").toggleClass("open");
    $(".header_nav-sp").fadeToggle();

});
});

$(function(){
  $(".hamburger2").click(function (){
    $(".hamburger2").toggleClass("open");
    $(".header_nav-sp").fadeToggle();

});
});


const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".text-anime");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

//1回だけ起動する場合は下記のモノ=====
// setTimeout(() => {
//   $target.addClass(CLASSNAME);
// }, TIMEOUT);
//======================