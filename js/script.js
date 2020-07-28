$(document).ready(function () {
  $("#slides").superslides({
        animation: "fade",
        play: 5000,
        pagination: false,
  });
  var typed = new Typed(".typed", {
        strings: ["Software Engineer", "Full Stack Web Developer"],
        typeSpeed: 100,
        loop: true,
        startDelay: 0,
        showCursor: false,
  });
  var typed2 = new Typed(".typed2", {
        strings: ["javascript", "ruby"],
        typeSpeed: 0,
        loop: true,
        startDelay: 1000,
        showCursor: false,
        smartBackspace: true,
        fadeOutDelay: 500,
  });
  $('.owl-carousel').owlCarousel({
      loop: true,
      items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
})
  $('.chart').easyPieChart({
      easing: 'easeInOut',
      barColor: '#fff',
      trackColor: false,
      scaleColor: false,
      lineWidth: 4,
      size: 152,
      onStep: function (from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
      }
  });
    
    var skillsTopOffset = $(".skillsSection").offset().top;
    
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

    });
});
