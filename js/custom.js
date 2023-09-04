var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// 슬릭
$(".single-item").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
});
$(document).ready(function () {
  // 마우스가 헤더에 진입할 때
  $("header").mouseover(function () {
    $(".header02").css("background-color", "#fff");
    $(".header02").css("transition", "0.3s");
    $(".header02").css("background-color", "#fff");
    $(".header_logo").css("background-position", "0 -58px");
    $(".menu_title a").css("color", "#000");
    $(".hambuger span").css("background-color", "#000");
    $(".header02").css("box-shadow", "1px 1px 10px #b4b4b4");
  });

  // 마우스가 헤더에서 빠져나갈 때
  $("header").mouseleave(function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition <= 100) {
      $(".header02").css("background-color", "transparent");
      $(".header_logo").css("background-position", "0 0");
      $(".header02").css("background-color", "transparent");
      $(".menu_title a").css("color", "#fff");
      $(".hambuger span").css("background-color", "#fff");
      $(".header02").css("box-shadow", "none");
    }
  });

  // 스크롤 이벤트 핸들러 추가
  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > 100) {
      $(".header02").css("background-color", "#fff");
      $(".header02").css("transition", "0.3s");
      $(".header02").css("background-color", "#fff");
      $(".header_logo").css("background-position", "0 -58px");
      $(".menu_title a").css("color", "#000");
      $(".hambuger span").css("background-color", "#000");
      $(".header02").css("box-shadow", "1px 1px 10px #b4b4b4");
    } else {
      if (!$("header:hover").length) {
        // 헤더에 마우스가 올라가 있는 동안에는 투명하지 않게 유지
        $(".header02").css("background-color", "transparent");
        $(".header_logo").css("background-position", "0 0");
        $(".header02").css("background-color", "transparent");
        $(".menu_title a").css("color", "#fff");
        $(".hambuger span").css("background-color", "#fff");
        $(".header02").css("box-shadow", "none");
      }
    }
  });

  // 서브메뉴1
  $("header .m_title01, .sub_menu.sub01").mouseover(function () {
    $(".sub_menu.sub01").stop().css("display", "block");
  });

  $("header .m_title01, .sub_menu.sub01").mouseleave(function () {
    $(".sub_menu.sub01").stop().fadeOut();
  });
  // 서브메뉴2
  $("header .m_title02, .sub_menu.sub02").mouseover(function () {
    $(".sub_menu.sub02").stop().css("display", "block");
  });

  $("header .m_title02, .sub_menu.sub02").mouseleave(function () {
    $(".sub_menu.sub02").stop().fadeOut();
  });
  // 서브메뉴3
  $("header .m_title03, .sub_menu.sub03").mouseover(function () {
    $(".sub_menu.sub03").stop().css("display", "block");
  });

  $("header .m_title03, .sub_menu.sub03").mouseleave(function () {
    $(".sub_menu.sub03").stop().fadeOut();
  });
  // 서브메뉴4
  $("header .m_title04, .sub_menu.sub04").mouseover(function () {
    $(".sub_menu.sub04").stop().css("display", "block");
  });

  $("header .m_title04, .sub_menu.sub04").mouseleave(function () {
    $(".sub_menu.sub04").stop().fadeOut();
  });
  // 서브메뉴5
  $("header .m_title05, .sub_menu.sub05").mouseover(function () {
    $(".sub_menu.sub05").stop().css("display", "block");
  });

  $("header .m_title05, .sub_menu.sub05").mouseleave(function () {
    $(".sub_menu.sub05").stop().fadeOut();
  });
  $(".footer a h5").click(function () {
    $(".footer ul").slideToggle();
  });
});
