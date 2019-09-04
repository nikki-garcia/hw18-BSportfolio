
//Google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-147078340-1');
  
  
  //name scroll logo
    $(function() {
      var name = $(".name");
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
          name.removeClass("hidden");
        } else {
          name.addClass("hidden");
        }
      });
    });
  
 