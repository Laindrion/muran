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
  let cartItems = document.querySelectorAll('.cart__list-item');
  let total = document.getElementById('total');
  let promocodeInput = document.getElementById('promocode');

  let prices = document.querySelectorAll('.price-num');

  const submitBtn = document.getElementById('submit');
  let promo = 'Pencil3000';
  let numberOfUse = 0;
  let promoLimit = 1;
  let promoWasUsed = false;

  let overallPrice = 0;

  console.log(overallPrice)

  submitBtn.addEventListener('click', (event) => {
    console.log(numberOfUse)
    /* Validator for promocode input */
    if (promocodeInput) {
      if (numberOfUse >= promoLimit) {
        alert(`The promocode was used more than ${numberOfUse} time`);
      } else {
        /* Promocode */
        if (promocodeInput.value === promo) {
          numberOfUse += 1;
          promoWasUsed = true;

          let percentage = 90;
          let discount = (Number(total.innerText) / 100) * percentage;

          total.innerText = Number(total.innerText) - Math.round(discount);
          console.log(discount)
        } else {
          alert("Invalid promocode!")
        }
      }

    }
  })


  /* Inside the cart Items */
  cartItems.forEach((item, index) => {
    let operators = item.querySelectorAll('.change-button');
    let qtys = item.querySelectorAll('.product-qty');
    let prices = item.querySelectorAll('.price-num');

    let totalSum;

    prices.forEach((price) => {
      totalSum = Number(total.innerText) + Number(price.innerText);
      total.innerText = totalSum;
    })

    operators.forEach((operator) => {
      let result;
      let resetTheTotal;

      /* Click event */
      operator.addEventListener('click', () => {


        /*  promoWasUsed = false;
         numberOfUse = 0; */


        /* Checking operators in buttons */

        /* + OPERATOR */
        if (operator.innerText === '+') {
          /************ For quantity ************/
          qtys.forEach((qty) => {
            /* Limit to 20 */
            if (qty.innerText >= 20) {

            } else {
              result = Number(qty.innerText) + 1;
              qty.innerText = result;

              /*********** For total price ************/
              prices.forEach((price) => {
                totalSum = Number(total.innerText) + Number(price.innerText);

                /* 
                if (promoWasUsed) {
                  resetTheTotal = Number(qty.innerText) * Number(price.innerText);
                  console.log(resetTheTotal);
                  totalSum = Math.round(resetTheTotal);
                } 
                */

                total.innerText = totalSum;
                overallPrice = totalSum;
                console.log(overallPrice);
              })
            }
          })
          /* - OPERATOR */
        } else if (operator.innerText === '-') {

          /************ For quantity ************/
          qtys.forEach((qty) => {

            /* Limit for items */
            if (qty.innerText <= 1) {
            } else {
              result = Number(qty.innerText) - 1;
              qty.innerText = result;

              /************ For total price ************/
              prices.forEach((price) => {
                totalSum = Number(total.innerText) - Number(price.innerText);

                total.innerText = totalSum
                overallPrice = totalSum;
                console.log(overallPrice);
              })
            }
          })
        } else {
          console.log("There should be either + or -")
        }
      })
      /*  */
    })

  })

});

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name);