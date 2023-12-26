$(document).ready(function () {

  /**********************
  **********************
    LANGUAGE BUTTON
  *********************
  **********************/
  $(".navbar__top-item-lang").click(function () {
    $(".navbar__top-item-lang__inner").toggleClass("active");

    $(".burger__navbar").removeClass("active");
    $("body").removeClass("modal__open");
  });

  /**********************
    **********************
      HEADER SEARCH
    **********************
    **********************/
  $("#header-search").click(() => {
    $("#navbar-search").addClass("active");
  });
  $("#close-search").click(() => {
    $("#navbar-search").removeClass("active");
  });

  /**********************
    **********************
      BURGER MENU
    **********************
    **********************/
  $("#burger-menu").click(function () {
    $(".burger__navbar").addClass("active");
    $("html").addClass("modal__open");

    $(".navbar__top-item-lang__inner").removeClass("active");
  });

  $("#burger-menu-close").click(() => {
    $(".burger__navbar").removeClass("active");
    $("html").removeClass("modal__open");
  });

  /**********************
    **********************
      TABS
    **********************
    **********************/
  const tabs = document.querySelectorAll(".tab-link");
  const all_list = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {

      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      all_list.forEach((list) => {
        list.classList.remove("active");
      });
      all_list.forEach((list) => {
        list.classList.remove('active');
      });
      all_list[index - 1].classList.add('active');

      console.log(index);

    });
  });

  /**********************
     **********************
        LINKS ONCLICK SCROLLING
     **********************
     **********************/
  let links = document.querySelectorAll('a[href="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  /**********************
    **********************
      ON SCROLL ANIMATION
    **********************
    **********************/
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    }))
  })
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));



  /**********************
    **********************
      SWIPER
    **********************
    **********************/
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

