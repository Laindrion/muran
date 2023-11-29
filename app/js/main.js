$(document).ready(function () {

  /*  $window = $(window);
   $window.scroll(function () {
     $scroll_position = $window.scrollTop();
     if ($scroll_position > 1) { // if body is scrolled down by 1 pixel
       $('.header').addClass('sticky');
 
       // to get rid of jerk
       header_height = $('.header').innerHeight();
       $('body').css('padding-top', header_height);
     } else {
       $('body').css('padding-top', '0');
       $('.header').removeClass('sticky');
     }
   }); */

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
        HEADER FONT SIZE
    **********************
    **********************/
  let font_plus = document.querySelectorAll("#fonts-plus");
  let font_minus = document.querySelectorAll("#fonts-minus");
  let font_standart = document.querySelectorAll("#fonts-standart");
  let html_dom = document.getElementById("html-dom");
  let font_size = 16;

  font_plus.forEach((btn) => {
    btn.addEventListener("click", function () {
      font_size += 1;

      html_dom.style.fontSize = font_size + "px";

      console.log(font_size);
    });
  });

  font_minus.forEach((btn) => {
    btn.addEventListener("click", function () {
      font_size -= 1;

      html_dom.style.fontSize = font_size + "px";

      console.log(font_size);
    });
  });

  font_standart.forEach((btn) => {
    btn.addEventListener("click", function () {
      font_size = 16;
      html_dom.style.fontSize = font_size + "px";
    });
  });

  /**********************
    **********************
        HERO SLIDER
    **********************
    **********************/
  $(".hero__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    fade: true,
    prevArrow: $(".hero__arrow-left"),
    nextArrow: $(".hero__arrow-right"),
    draggable: false,
    pauseOnHover: false,
    autoplaySpeed: 8000,
  });

  /**********************
    **********************
        RECENT SLIDER
    **********************
    **********************/
  $(".recent__box").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1785,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /**********************
    **********************
        SEARCH INPUT
    **********************
    **********************/
  let searchInput = document.getElementById("search-input");
  let searchBtn = document.getElementById("search-btn");
  let searchClose = document.getElementById("search-close");

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      searchInput.classList.add("active");
      searchClose.classList.add("active");
    });

    searchClose.addEventListener("click", function () {
      searchInput.classList.remove("active");
      searchClose.classList.remove("active");
    });
  }

  /**********************
   **********************
       SIDEBAR MENU
   **********************
   **********************/
  // let sidebarMenu = document.getElementById('sidebar-menu');
  // let sidebarClose = document.getElementById('sidebar-menu-close');
  // let burgerBtn = document.getElementById('burger-btn');

  // burgerBtn.addEventListener('click', function () {
  //     sidebarMenu.classList.add('active');
  // })

  // sidebarClose.addEventListener('click', function () {
  //     sidebarMenu.classList.remove('active');
  // })

  /**********************
    **********************
        NEWS SLIDER
    **********************
    **********************/
  $(".news__slider-inner").slick({
    slidesToShow: 3,
    prevArrow: $(".arrow__left"),
    nextArrow: $(".arrow__right"),
    autoplay: true,
    responsive: [
      {
        breakpoint: 1275,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /**********************
   **********************
      ABOUT UZBEKISTAN     
   **********************
   **********************/
  // Get the SVG map element and the list of regions
  const svgMap = document.getElementById("uzbekistan-map");
  const regionListItems = document.querySelectorAll(".region__list-item");
  const uzbekistanInfo = document.getElementById("uzbekistan-info");
  const investmentStatistics = document.getElementById("investment-statistics");

  // Add click event listeners to each SVG region
  if (svgMap) {
    svgMap.querySelectorAll("path").forEach(function (region) {
      region.addEventListener("click", function () {
        // Reset the style of all list items and SVG regions
        regionListItems.forEach(function (item) {
          item.classList.remove("active");
        });
        svgMap.querySelectorAll("path").forEach(function (region) {
          region.removeAttribute("style");
        });

        // Get the region name from the data-region attribute
        const regionName = region.getAttribute("data-region");

        // Add active class to the corresponding list item
        const clickedListItem = document.querySelector(
          `.region__list-item[data-region="${regionName}"]`
        );
        clickedListItem.classList.add("active");

        // Change the fill color of the clicked SVG region
        region.style.fill = "#ffffff"; // Change to your desired color
        region.style.fillOpacity = "1"; // Change to your desired color

        if (uzbekistanInfo) {
          region.style.fill = "#051A3B";
        } else if (investmentStatistics) {
          region.style.fill = "#051A3B";
        }

        // Scroll to the clicked list item
        clickedListItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      });
    });
  }

  // Add click event listeners to each list item
  if (regionListItems) {
    regionListItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Reset the style of all list items and SVG regions
        regionListItems.forEach(function (item) {
          item.classList.remove("active");
        });
        svgMap.querySelectorAll("path").forEach((region) => {
          region.removeAttribute("style");
        });

        // Get the region name from the data-region attribute
        const regionName = item.getAttribute("data-region");

        // Add active class to the corresponding list item
        const clickedRegion = svgMap.querySelector(
          `path[data-region="${regionName}"]`
        );
        clickedRegion.style.fill = "#fff"; // Change to your desired color
        clickedRegion.style.fillOpacity = "1";

        if (uzbekistanInfo) {
          clickedRegion.style.fill = "#051A3B";
        } else if (investmentStatistics) {
          clickedRegion.style.fill = "#051A3B";
        }

        item.classList.add("active");

        // Scroll to the clicked list item
        item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  /**********************
   **********************
       ACCARDION
   **********************
   **********************/
  const accordionTitles = document.querySelectorAll(".accardion-btn");
  const accardionCloseBtns = document.querySelectorAll(".accardion-close");

  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
      if (accordionTitle.classList.contains("accardion-active")) {
        accordionTitle.classList.remove("accardion-active");
      } else {
        const accordionTitlesWithIsOpen =
          document.querySelectorAll(".accardion-active");
        accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
          accordionTitleWithIsOpen.classList.remove("accardion-active");
        });
        accordionTitle.classList.add("accardion-active");
      }
    });
  });

  accardionCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      accordionTitles.forEach((accardionBtn) => {
        accardionBtn.classList.remove("accardion-active");
      });
    });
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
        POST SLIDER
   **********************
   **********************/
  $(".post__slider-days__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".arrow__prev"),
    nextArrow: $(".arrow__next"),
    asNavFor: ".post__slider-event",
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".post__slider-event").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
  });

  /**********************
     **********************
          GALLERY
     **********************
  **********************/
  $(".gallery__photo").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  /**********************
     **********************
         COOPERATION SLIDER
      **********************
  **********************/
  $(".cooperation__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
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
});

