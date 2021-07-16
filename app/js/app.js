import {Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay} from "swiper"
import {Tab} from "bootstrap/js/dist/tab"
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay ]);


document.addEventListener('DOMContentLoaded', () => {

	const introSwiper = new Swiper('.intro__swiper', {
		loop: true,
		spaceBetween: 32,
		
		// If we need pagination
		pagination: {
		  el: '.intro__pagination',
		  type: "fraction"
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.intro__btn-next',
		  prevEl: '.intro__btn-prev',
		},

	  });


	  const projectSwiper = new Swiper('.project__swiper', {
		loop: true,
	  

		pagination: {
		  el: '.project__pagination',
		  type: "fraction"
		},

		navigation: {
		  nextEl: '.project__btn-next',
		  prevEl: '.project__btn-prev',
		},

	  });


	  const certificateSwiper = new Swiper('.certificate__swiper', {
		loop: true,
	  

		breakpoints: {

				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},

				540: {
					slidesPerView: 2,
					spaceBetween: 20,
				},

				768: {
					slidesPerView: 3,
					spaceBetween: 16,
				},

				1200: {
					slidesPerView: 4,
					spaceBetween: 16,

				}
			},
	  

		navigation: {
		  nextEl: '.certificate__btn-next',
		  prevEl: '.certificate__btn-prev',
		},

	  });





	  //открытие бургер меню 

	  const burger = document.querySelector('.header__burger');
	  const headerNavigation = document.querySelector('.header__navigation');


	  burger.addEventListener('click', () => {
			burger.classList.toggle('active');
			headerNavigation.classList.toggle('active');

	  })





	  // аккордеон для блока help

	  const acc = document.querySelectorAll(".help__accordion");

	  for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
		  this.classList.toggle("active");
		  let panel = this.nextElementSibling;
		  if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		  } else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		  }
		});
	  }


	//   acc.forEach((item, index) => {
	// 	item.addEventListener('click', () => {
	// 		panel.forEach((elem, counter) => {
	// 			elem.style.maxHeight = null;
	// 			if (index === counter) {
	// 				item.classList.add('active')
	// 				elem.style.maxHeight = elem.scrollHeight + "px";			
	// 			  } else {

	// 		  }
	// 		  })


	// 	})
	// });

	  document.getElementById("defaultOpen").click();

	  	
	 // открытие блока читтать полностью 


	  let btn = document.querySelector('.capability__btn');
	  let content = document.querySelector('.capability__info');


	  btn.addEventListener('click', () => {
		  console.log(btn.innerHTML);
		if (btn.innerHTML == "Читать полностью") {
			btn.innerHTML = "Скрыть";
		} else {
			btn.innerHTML = "Читать полностью";
		}
		content.classList.toggle('active');
	  })





	  // плавный переход к ссылкам

		$(document).ready(function(){
			$("#navigation").on("click","a", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 100);
			});
		});

		$(document).ready(function(){
			$("#links").on("click","a", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 100);
			});
		});







	
	/**
	 * Handler for controls buttons in number input
	 */
	 var numberContolButtons = [].slice.call(document.querySelectorAll('[data-number-control]'));
	 numberContolButtons.map(function (btnElement) {
		 btnElement.addEventListener('click', (event) => {
			 var btnType = btnElement.dataset.action;
			 var numberInput = btnElement.closest('.form__number-wrapper');
 
			 numberInput = numberInput.querySelector('input[type="number"]')
 
			 if (!numberInput)
				 return;
 
 
			 if (btnType === 'plus')
				 numberInput.value = +numberInput.value + 1;
			 else if (numberInput.min < numberInput.value)
				 numberInput.value -= 1;
		 });
	 })
 

	 
 
	 /**
	  *  Calculation form behavior
	  */
	 let calcBtn = document.querySelector('.calculator__form .calculator_btn_next');
	 calcBtn.addEventListener('click', (event) => {
 
		 let fields = [].slice.call(document.querySelectorAll('.calculator__form-visible input, select'));
		 let isAllValid = true;
 
		 fields.map(function (filedElement) {
			 console.log(filedElement.validity.valid);
			 if (!filedElement.validity.valid)
				 isAllValid = false;
		 })
 
		 if (isAllValid) {
			 event.preventDefault();
			 let hiddenBlock = document.querySelector('.calculator__form .calculator__form-hidden');
			 hiddenBlock.classList.add('show');
		 }
 
 
 
	 });







	const footerLabel = document.querySelectorAll('.footer__label');

	for (let j = 0; j < acc.length; j++) {
		footerLabel[j].addEventListener("click", function() {
		  this.classList.toggle("active");
		  var footerMenu = this.nextElementSibling;
		  console.log(footerMenu);
		  if (footerMenu.style.maxHeight){
			footerMenu.style.maxHeight = null;
			footerMenu.style.paddingBottom = 0 + 'px';

		  } else {
			footerMenu.style.paddingBottom = 32 + 'px';
			footerMenu.style.maxHeight = footerMenu.scrollHeight + "px";
		  }
		});
	  }





	  
})



