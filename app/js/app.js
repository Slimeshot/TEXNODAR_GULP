import {Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay} from "swiper"
import {Tab} from "bootstrap/js/dist/tab"
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay ]);

function getScrollBarWidth () {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild (outer);

  return (w1 - w2);
};


function compensateBody(){
  $('body').addClass('BodyOverflow');
  $('body').css('margin-right', getScrollBarWidth());
}
function unCompensateBody(){
  $('body').attr('style', '');
  $('body').removeClass('BodyOverflow');
}



document.addEventListener('DOMContentLoaded', () => {
	//! MOBILE FIX 100VH
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	//! MOBILE FIX 100VH END

	const titleSwiper = new Swiper('.swiper__title', {
		loop: true,
		spaceBetween: 32,

	  });
	

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

	  const interfaceSwiper = new Swiper('.interface__swiper', {
		loop: true,


		pagination: {
		  el: '.interface__pagination',
		  type: "fraction"
		},

		navigation: {
		  nextEl: '.interface__btn-next',
		  prevEl: '.interface__btn-prev',
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


	  titleSwiper.controller.control = interfaceSwiper
	  interfaceSwiper.controller.control = titleSwiper


		//mask phone 

		$(".form__phone").mask("+7(999) 999-9999");
		$(".call__phone").mask("+7(999) 999-9999");


		//open/close burger-menu

	  const headerBurger = document.querySelector('.header__burger');
	  const headerInfo = document.querySelector('.header__navigation');


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
	  const proemBtn = document.querySelector('.proem__btn');
	  const branchBtn = document.querySelectorAll('.branch__btn');
	  const callCross = document.querySelector('.call__cross');
	  const sailingBtn = document.querySelectorAll('.sailing__btn-call');
	  const callBlock = document.querySelector('.call');
	  const callBg = document.querySelector('.call__bg');

	  //закрытие бургер и открытие кол
	  headerBtn.addEventListener('click', () => {
		document.body.classList.add('active');
		headerBurger.classList.remove('active');
		headerInfo.classList.remove('active');
		callBlock.classList.add('active');
		callBg.classList.add('active');
		

	  })
	  //закрытие кол
	  callCross.addEventListener('click', () => {
		callBlock.classList.remove('active');
		callBg.classList.remove('active');
		document.body.classList.remove('active')
	  })
	  //закртыие кал по клику на фон
	  callBg.addEventListener('click', () => {
		callBlock.classList.remove('active');
		callBg.classList.remove('active');
		if (calcBlock) {
			calcBlock.classList.remove('active');
		}
		document.body.classList.remove('active')
	  })

	  //открытие кол по клику
	  if (proemBtn) {
		  proemBtn.addEventListener('click', () => {
			callBlock.classList.add('active');
			callBg.classList.add('active');
			document.body.classList.add('active')
		})

	  }

	  if (branchBtn) {
		branchBtn.forEach(item => {
			item.addEventListener('click', () => {
			  callBlock.classList.add('active');
			  callBg.classList.add('active');
			  document.body.classList.add('active')
			})
		})
	  }
	  
		  
	  //закрытие навигации и открытие меню
	  if (sailingBtn) {
		  sailingBtn.forEach((item, index) => {
			item.addEventListener('click', () => {
				sailingBurger.classList.remove('active');
				sailingMenu.classList.remove('active');
				callBlock.classList.add('active');
				callBg.classList.add('active');
				document.body.classList.add('active')
			  })
		  })
	  }



	   //close/open call

	   const calcBtnNext = document.querySelector('.calculator_btn_next');
	   const calcCross = document.querySelector('.calculator__cross');
	   const calcBlock = document.querySelector('.calculator__finish');

	   
	   if (calcBtnNext) {
		   $('.calculator_btn_next').on('click', () => {
			   var kindTransport = $('#shipSelect option:selected').html();
			   var formCount = $('#formCount').val();
			   var monthDelivery = $('#monthDelivery').val();
			   var price = $('#price').val();
				// console.log(typeof price);
			   $('.calculator__view').text(kindTransport);
			   $('.calculator__count').text(formCount);
			   $('.calculator__delivery').text(monthDelivery);
			   $('.calculator__price').text(price);
			   $('.calculator__result').text(Math.floor(formCount * monthDelivery * price * (7.49/100)) + ' руб');

			//    if (formCount == "" || monthDelivery == "" || price == "") {
			// 	   // $("#errorCalcMess").css('color', '#fff');
			// 	   // $('#errorCalcMess').text('Заполните все поля!');
			// 	   return false;
			//    } 
				calcBtnNext.addEventListener('click', () => {
				callBg.classList.add('active')
				calcBlock.classList.add('active');
				})
	
				
		   

				// var color = $('#calc__color option:selected').text();
				// var palitra = $('#calc__palitra option:selected').text();
				// var cheked = '';
				// if ($('#calc__express').is(':checked')){
				// 	cheked = 'Нужна экспресс покраска!';
				// } else {
				// 	cheked = 'Не нужна экспресс покраска!'
				// }
				// var sum = $('.calc__price').text();
				// $("#errorCalcMess").css('color', '#fff');
				// $('#errorCalcMess').text('');
			})
			calcCross.addEventListener('click', () => {
				calcBlock.classList.remove('active');
				callBg.classList.remove('active')
			})
	   }


	   $('#shipSelect').each(function() {
		const _this = $(this),
			selectOption = _this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			duration = 450; // длительность анимации 
	
		_this.hide();
		_this.wrap('<div class="select"></div>');
		$('<div>', {
			class: 'new-select',
			text: _this.children('option:disabled').text()
		}).insertAfter(_this);
	
		const selectHead = _this.next('.new-select');
		$('<div>', {
			class: 'new-select__list'
		}).insertAfter(selectHead);
	
		const selectList = selectHead.next('.new-select__list');
		for (let i = 1; i < selectOptionLength; i++) {
			$('<div>', {
				class: 'new-select__item',
				html: $('<span>', {
					text: selectOption.eq(i).text()
				})
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
	
		const selectItem = selectList.find('.new-select__item');
		selectList.slideUp(0);
		selectHead.on('click', function() {
			if ( !$(this).hasClass('on') ) {
				$(this).addClass('on');
				selectList.slideDown(duration);
	
				selectItem.on('click', function() {
					let chooseItem = $(this).data('value');
	
					$('select').val(chooseItem).attr('selected', 'selected');
					selectHead.text( $(this).find('span').text() );
	
					selectList.slideUp(duration);
					selectHead.removeClass('on');
				});
	
			} else {
				$(this).removeClass('on');
				selectList.slideUp(duration);
			}
		});
	});



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
		let capabylitiLink = document.getElementById('sailingLinkonCapability');

	  if (content) {
		btn.addEventListener('click', () => {
			console.log(btn.innerHTML);
		  if (btn.innerHTML == "Читать полностью") {
			  btn.innerHTML = "Скрыть";
		  } else {
			  btn.innerHTML = "Читать полностью";
			  capabylitiLink.click();
		  }
		  content.classList.toggle('active');
		})
	  }





	  // плавный переход к ссылкам

		document.querySelectorAll('a[href^="#"]').forEach(link => {

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
	//  let calcBtn = document.querySelector('.calculator__form .calculator_btn_next');

	//  if (calcBtn) {
	// 	calcBtn.addEventListener('click', (event) => {
 
	// 		let fields = [].slice.call(document.querySelectorAll('.calculator__form-visible input, select'));
	// 		let isAllValid = true;

	// 		fields.map(function (filedElement) {
	// 			console.log(filedElement.validity.valid);
	// 			if (!filedElement.validity.valid)
	// 				isAllValid = false;
	// 		})

	// 		if (isAllValid) {
	// 			event.preventDefault();
	// 			let hiddenBlock = document.querySelector('.calculator__form .calculator__form-hidden');
	// 			hiddenBlock.classList.add('show');
	// 		}

	// 	});
	//  }







	const footerLabel = document.querySelectorAll('.footer__label');
	footerLabel.forEach(item => {
		item.addEventListener("click", function() {
		  this.classList.toggle("active");
		  var footerMenu = this.nextElementSibling;
		  if (footerMenu.style.maxHeight){
			footerMenu.style.maxHeight = null;
			footerMenu.style.paddingBottom = 0 + 'px';

		  } else {
			footerMenu.style.paddingBottom = 32 + 'px';
			footerMenu.style.maxHeight = footerMenu.scrollHeight + "px";
		  }
		});

	})





	if (document.querySelector('.quiz')) {
		function openQuis () {
			if ($('.quiz').length) {
				$('.quiz').addClass('quiz_active')
				compensateBody()
				checkCurrentStep()
			}
		}
		function closeQuis () {
			if ($('.quiz_active').length) {
				$('.quiz_active').removeClass('quiz_active')
				setTimeout(function () {
					unCompensateBody()
				}, 500)
			}
		}
	
		$(document).on('click', '[data-quiz]', function() {
			openQuis()
		})
		$(document).on('click', '[data-close-quiz]', function() {
			closeQuis()
		})
	
		$(document).on('click', '.quiz', function(){
			closeQuis()
		})
		$(document).on('click', '.quiz-content', function (e) {
			e.stopPropagation()
		})
	
		$(document).on('click', '.quiz__next', function () {
			nextStep()
		})
	
		function nextStep() {
			const currentStepIndex = $('.quiz-step_active').attr('data-step')
			const currentStep = $('.quiz-step_active')
	
	
			if ($('.quiz-step').length === parseInt(currentStepIndex) + 1) {
			} else {
				addResult(currentStep)
				$('.quiz-step_active').removeClass('quiz-step_active')
				$($('.quiz-step')[parseInt(currentStepIndex) + 1]).addClass('quiz-step_active')
				if (parseInt(currentStepIndex) + 2 == $('.quiz-step').length) {
					$('.quiz__next').html('Получить расчёт')
				}
				checkCurrentStep()
			}
		}
	
		function addResult(step) {
	
			const title = step.find('.quiz__title').html()
			const checkedInputs = step.find('input[type="radio"]:checked, input[type="checkbox"]:checked')
			let answers = []
			if (checkedInputs.length) {
				checkedInputs.each(function (index, el) {
					answers.push(el.value);
				})
			}
			const rangeInput = step.find('input[type="range"]')
			if (rangeInput.length) {
				rangeInput.each(function (index, el) {
					answers.push(el.value);
				})
			}
	
			let vals = ''
			answers.forEach(function(el) {
				vals += `<span class="quiz-results-item-res__val">${el}</span>`
			})
			const template =
				`<div class="quiz-results-item">
					<span class="quiz-results-item__title">${title}</span>
					<div class="quiz-results-item-res">
						${vals}
					</div>
				</div>`
			$('.quiz-results').append(template)
			$('.quiz-results-item:not(.quiz-results-item_active)').css('height', `${$('.quiz-results-item:not(.quiz-results-item_active)')[0].scrollHeight}px`)
			$('.quiz-results-item:not(.quiz-results-item_active)').addClass('quiz-results-item_active')
			setTimeout(function () {
				$('.quiz-results-item:not(.quiz-results-item_active)').css('height', `auto`)
			}, 400)
			$('.quiz-results').addClass('quiz-results_active')
		}
	
		$(window).on('resize', function() {
			checkCurrentStep()
		})
	
		function checkCurrentStep () {
			const currentStep = $('.quiz-step_active')
			const inputs = currentStep.find('input[type="radio"], input[type="checkbox"]').length
			const checkedInputs = currentStep.find('input[type="radio"]:checked, input[type="checkbox"]:checked').length
			const btn = $('.quiz__next')
	
				const content = $('.quiz-content')[0]
				if (content.clientHeight < content.scrollHeight) {
					$('.quiz-bottom').addClass('quiz-bottom_sticky')
				} else {
					$('.quiz-bottom').removeClass('quiz-bottom_sticky')
				}
	
			if (inputs) {
				if (checkedInputs) {
					btn.prop('disabled', false)
				} else {
					btn.prop('disabled', true)
				}
			} else {
				btn.prop('disabled', false)
			}
		}
	
		$(document).on('input', '.quiz input[type="radio"], .quiz input[type="checkbox"]', function() {
			checkCurrentStep()
		})
	
		$(document).on('input', '.quiz input[type="range"]', function(e) {
			const val = parseInt(e.target.value)
			let string = ''
			if (val % 10 === 1 && Math.round(val / 10) !== 1) {
				string = 'единица'
			} else if (val % 10 > 4 || val % 10 === 0 || (val > 4 && val < 21)) {
				string = 'единиц'
			} else if(val / 10 !== 1) {
				string = 'единицы'
			}
			$('.quiz__rangeValue span:nth-child(1)').html(val)
			$('.quiz__rangeValue span:nth-child(2)').html(string)
		})
	
	
		function openInterview (el) {
			el.find('.interview').addClass('interview_active')
			compensateBody()
		}
	
		function closeInterview () {
			$('.interview_active').removeClass('interview_active')
			setTimeout(function () {
				unCompensateBody()
			}, 500)
		}
	
		$(document).on('click', '[data-interview]', function() {
			openInterview($(this))
		})
		$(document).on('click', '.interview', function (e) {
			e.stopPropagation()
			closeInterview()
		})
		$(document).on('click', '.interview-content', function (e) {
			e.stopPropagation()
		})
		$(document).on('click', '.interview__close', function() {
			closeInterview()
		})
	
	
		let currentIndex = null
	
		function setSertificateModalData(el) {
			const title = el.attr('data-title')
			const image = el.attr('data-image')
			const download = el.attr('data-download')
	
			const modal = $('.sertificate-modal')
			modal.find('.sertificate-modal__title').html(title)
			modal.find('.sertificate-modal-imgbox img').prop('src', image)
			modal.find('.sertificate-modal__download').prop('href', download)
		}
	
		function openSertificateModal (el) {
			setSertificateModalData(el)
			$('.sertificate-modal').addClass('sertificate-modal_active')
			compensateBody()
			currentIndex = el.attr('data-index')
		}
	
		function closeSertificate () {
			$('.sertificate-modal_active').removeClass('sertificate-modal_active')
			setTimeout(function () {
				unCompensateBody()
			}, 500)
			currentIndex = null
		}
	
		$(document).on('click', '[data-sertificate]', function() {
			openSertificateModal($(this))
		})
		$(document).on('click', '.sertificate-modal', function (e) {
			e.stopPropagation()
			closeSertificate()
		})
		$(document).on('click', '.sertificate-modal-content, .sertificate-modal-arrow', function (e) {
			e.stopPropagation()
		})
		$(document).on('click', '.sertificate-modal__close', function() {
			closeSertificate()
		})
	
	
		$(document).on('click', '.sertificate-modal-arrow_prev', function() {
			const length = $('.certificate__slide:not(.swiper-slide-duplicate)').length
			currentIndex--;
			if (currentIndex == -1) {
				currentIndex = length - 1
			}
			setSertificateModalData($(`.certificate__slide:not(.swiper-slide-duplicate)[data-index="${currentIndex}"]`))
		})
	
		$(document).on('click', '.sertificate-modal-arrow_next', function() {
			const length = $('.certificate__slide:not(.swiper-slide-duplicate)').length
			currentIndex++;
			if (currentIndex == length) {
				currentIndex = 0;
			}
			setSertificateModalData($(`.certificate__slide:not(.swiper-slide-duplicate)[data-index="${currentIndex}"]`))
		})
	}
})



