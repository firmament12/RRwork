$(function(){
  
  // スムーススクロールボタン
  $(window).scroll(function() {
      if ($(this).scrollTop()>480) {
          $('.up').fadeIn(240);
      } else {
          $('.up').fadeOut(200);
  }});
  $('a[href^="#"]').on('click',function() {
      var href= $(this).attr('href');
      var target = $(href);
      var w = $(window).width();
      var x = 767;
      if (w <= x) {
          var position = target.offset().top-20;
      } else {
          var position = target.offset().top-40;
      }
      $('body,html').animate({scrollTop:position}, 300, 'swing');
      return false;
  });
    
  });