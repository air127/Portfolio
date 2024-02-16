
$('#pagetop').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

$(document).ready(function(){
  $('.slider').slick({
   autoplay : true ,
   autoplaySpeed: 0,
   speed: 5000,
   dots : true ,
   slidesToShow: 1 ,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow:1,
          centerMode:true,
          centerPadding:'100px'
        }
      }
    ]
  });
});
