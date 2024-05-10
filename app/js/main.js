$(document).ready(function () {

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


  /**********************
    **********************
      CART
    **********************
    **********************/
  const items = document.querySelectorAll('.cart__list-item');

  function cartFn() {
    items.forEach((item) => {
      const operators = item.querySelectorAll('.change-button');
      const prices = item.querySelector('.price-num');
      let qtys = item.querySelector('.product-qty');
      let total = document.getElementById('total');

      /* Merging all prices of product in total */
      total.innerText = Number(prices.innerText) + Number(total.innerText);

      function calculation() {

        operators.forEach((operator) => {
          const operatorText = operator.innerText.trim();

          /* Product quantity */
          function qtysFn(whatOperator) {
            if (whatOperator === '+') {
              if (Number(qtys.innerText) >= 10) {
                console.log('I can\'t add thing');
              } else {
                qtys.innerText = Number(qtys.innerText) + 1;
              }
            } else if (whatOperator === '-') {
              if (Number(qtys.innerText) <= 0) {
                console.log('I can\'t remove thing');
              } else {
                qtys.innerText = Number(qtys.innerText) - 1;
              }
            }
          }

          /* Product calculation on click */
          function calcFn(whatOperator) {
            if (whatOperator === '+') {
              if (qtys.innerText < 10) {
                total.innerText = Number(total.innerText) + Number(prices.innerText);
              } else {
              }
            } else if (whatOperator === '-') {
              if (Number(qtys.innerText) > 0) {
                total.innerText = Number(total.innerText) - Number(prices.innerText);

                console.log(Number(qtys.innerText));
              } else {
                let remove = (prompt('Are you sure you want to remove this item?') === 'Yes') ? item.remove() : ('No') ? qtys.innerText = Number(qtys.innerText) + 1 : qtys.innerText = Number(qtys.innerText) + 1;
                /* alert(remove) */
              }
            }
          }

          operator.addEventListener('click', function () {
            if (operatorText === '+') {

              /* Calling calcFn function */
              calcFn('+');
              /* Calling qtys function */
              qtysFn('+');
              
            } else if (operatorText === '-') {

              /* Calling calcFn function */
              calcFn('-');
              /* Calling qtys function */
              qtysFn('-');

            }
          });

        })
      }

      calculation();
    })
  }

  cartFn();

});