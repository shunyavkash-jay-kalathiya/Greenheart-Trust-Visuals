// menu js
$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() < 1024) {
      $(".menu-list li").removeClass("active-in");
    }
  });
  //  Accrodian
  $(".accordian.active-in .accordion-collapse").slideDown();

  $(".title-acodian").click(function () {
    if ($(this).parents(".accordian").hasClass("active-in")) {
      $(this).parents(".accordian").removeClass("active-in");
      $(this).parents().children(".accordion-collapse").slideUp();
    } else {
      $(".accordian").removeClass("active-in");
      $(".accordian .accordion-collapse").slideUp();
      $(this).parents(".accordian").addClass("active-in");
      $(this).parents().children(".accordion-collapse").slideDown();
    }
  });
});

// header change
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $(".header").addClass("header-change");
    } else {
      $(".header").removeClass("header-change");
    }
  });
});

// toggle menu
$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() > 1024) {
      $(".toggle-item").slideDown("fast");
    } else {
      $(".toggle-item").hide("menu");
    }
  });
  $(".toggle-menu").click(function () {
    $(".toggle-item").slideToggle("slow");
  });
});
