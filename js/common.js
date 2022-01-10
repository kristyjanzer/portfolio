/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {
	'use strict';


  // Burger Menu
  const menuBtn = document.querySelector('.header__contacts-burger');
  const contacts = document.querySelector('.contacts');

  menuBtn.addEventListener('click', () => {
    contacts.classList.toggle('active');
  });

  //Swiper SLider
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.portfolio__arrow_right',
      prevEl: '.portfolio__arrow_left',
      disabledClass: 'portfolio__arrow_disable'
    },
    breakpoints: {
      480: {
        grid: {
          fill: 'row',
          rows: 2
        }
      },
      768: {
        slidesPerView: 2,
        grid: {
          fill: 'row',
          rows: 2
        }
      }
    }
  });


  // Block Height
    const portfolioItem = document.querySelectorAll('.portfolio__item');
    
    function blockHeight(block) {
      if (window.clientWidth > 1000) {
        let height = 0;
    
        block.forEach(item => {
          let currentHeight = item.offsetHeight;
          if (currentHeight > height) {
            height = currentHeight;
          }
        });
      
        block.forEach(item => {
          item.style.height = `${height}px`;
        });
      } 
  
    }
  
    blockHeight(portfolioItem);


});