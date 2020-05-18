$(document).ready(function () {
  // Stick navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeInLeft");
    },
    {
      offset: "50%",
    }
  );

  // Scroll on buttons
  $(".js--scroll-to-location").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-location").offset().top },
      1000
    );
  });

  $(".js--scroll-to-why").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(".js--scroll-to-contact").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-contact").offset().top },
      1000
    );
  });

  // Mobile nav
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.removeClass("ion-close-round");
      icon.addClass("ion-navicon-round");
    }
  });
});
