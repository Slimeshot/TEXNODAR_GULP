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





		  //open/close burger-menu

	  const headerBurger = document.querySelector('.header__burger');
	  const headerInfo = document.querySelector('.header__info');


	  headerBurger.addEventListener('click', () => {
		  	document.body.classList.toggle('active')
			headerBurger.classList.toggle('active');
			headerInfo.classList.toggle('active');

	  })


	  //open/close burger-menu
	  const sailingBurger = document.querySelector('.sailing__burger');
	  const sailingMenu = document.querySelector('.sailing__menu');
	  const sailingLink = document.querySelectorAll('.sailing__link');


	  if (sailingMenu) {
		  sailingBurger.addEventListener('click', () => {
				sailingBurger.classList.toggle('active');
				sailingMenu.classList.toggle('active');
				
		  })
	  }



	  //close menu after click
	  sailingLink.forEach(item => {
		  item.addEventListener('click', () => {
			sailingBurger.classList.remove('active');
			sailingMenu.classList.remove('active');
		  })
	  })


	  //close/open call 

	  const headerBtn = document.querySelector('.header__btn');
	  const callCross = document.querySelector('.call__cross');
	  const sailingBtn = document.querySelectorAll('.sailing__btn-call');
	  const callBlock = document.querySelector('.call');

	  headerBtn.addEventListener('click', () => {
		document.body.classList.remove('active')
		headerBurger.classList.remove('active');
		headerInfo.classList.remove('active');
		callBlock.classList.add('active');

	  })

	  callCross.addEventListener('click', () => {
		callBlock.classList.remove('active');
	  })

	  if (sailingBtn) {
		  sailingBtn.forEach((item, index) => {
			item.addEventListener('click', () => {
				sailingBurger.classList.remove('active');
				sailingMenu.classList.remove('active');
				callBlock.classList.add('active');
			  })
		  })
	  }






	  // аккордеон для блока help

	  const acc = document.querySelectorAll(".help__accordion");
	//   const panel = document.querySelectorAll('.help__panel')

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
	// 		// console.log(index);
	// 		// panel.forEach((elem, counter) => {
	// 		// 	console.log(counter);
	// 		// 	elem.style.maxHeight = null;
	// 		// 	item.classList.remove('active')
	// 		// 	if (index === counter) {
	// 		// 		item.classList.add('active')
	// 		// 		elem.style.maxHeight = elem.scrollHeight + "px";			
	// 		// 	  } else {

	// 		//   }
	// 		//   })
	// 		// let pa = this.nextElementSibling;
	// 		// console.log(index);
	// 		// console.log(pa);
	// 	})
	// });

	if (document.getElementById("defaultOpen")) {
		document.getElementById("defaultOpen").click();
	}


	 // открытие блока читтать полностью 

	  let btn = document.querySelector('.capability__btn');
	  let content = document.querySelector('.capability__info');


	  
	  if (content) {
		btn.addEventListener('click', () => {
			console.log(btn.innerHTML);
		  if (btn.innerHTML == "Читать полностью") {
			  btn.innerHTML = "Скрыть";
		  } else {
			  btn.innerHTML = "Читать полностью";
		  }
		  content.classList.toggle('active');
		})
	  }





	  // плавный переход к ссылкам

		document.querySelectorAll('a[href^="#"').forEach(link => {

			link.addEventListener('click', function(e) {
				e.preventDefault();
		
				let href = this.getAttribute('href').substring(1);
		
				const scrollTarget = document.getElementById(href);
				
				let topOffset;
				// const topOffset = 0; // если не нужен отступ сверху 

				if (document.querySelector('.sailing')) {
					topOffset = document.querySelector('.sailing').offsetHeight;
				} else {
					topOffset = 0; // если не нужен отступ сверху 
				}
				const elementPosition = scrollTarget.getBoundingClientRect().top;
				const offsetPosition = elementPosition - topOffset;
		
				window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth'
				});
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
	 
	 if (calcBtn) {
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
	 }







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



