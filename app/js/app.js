import {Swiper, EffectFade, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay} from "swiper";
import {Tab} from "bootstrap/js/dist/tab";
import lottie from 'lottie-web/build/player/lottie_html.min.js'
Swiper.use([ Parallax, EffectFade, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay ]);

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


// document.body.onload = function() {
// 	setTimeout( function() {
// 		var preloader = document.getElementById('page-preloader');
// 		console.log(preloader)
// 		if (!preloader.classList.contains('done') ) {
// 			preloader.classList.add('done')
// 		}
// 	}, 0)
// }



document.addEventListener('DOMContentLoaded', () => {
	
	// const circle = document.querySelector('.prograss-ring__circle');
	// const radius = circle.r.baseVal.value;
	// const circumference = 2 * Math.Pi * radius;

	// console.log(circle.r)

	if (document.querySelector('.prelude')) {

		var circle = document.querySelector('.progress-ring__circle');
		var radius = circle.r.baseVal.value;
		var circumference = radius * 2 * Math.PI;

		circle.style.strokeDasharray = `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = `${circumference}`;

		function setProgress(percent) {
		const offset = circumference - percent / 100 * circumference;
		circle.style.strokeDashoffset = offset;
		}








		$('input[type=range]').on('input', function(e){
			var min = e.target.min,
				max = e.target.max,
				val = e.target.value;
			
			$(e.target).css({
			'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
			});
		}).trigger('input');


		let bgFon = document.querySelector('.prelude__bg-fon');
		let bgShip = document.querySelector('.prelude__bg-ship');
		let bgGull = document.querySelector('.prelude__bg-gull');
		window.addEventListener('mousemove', function(e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;  
			bgFon.style.transform = 'translateX(-' + x * 60 + 'px)';
			bgShip.style.transform = 'translateX(+' + x * 40 + 'px)';
			bgGull.style.transform = 'translateX(-' + x * 20 + 'px)';
		});


		let inputBtn = document.querySelector('.caster__input');
		let inputBlock = document.querySelector('.caster__input-block');


		inputBtn.addEventListener('click', () => {
			inputBtn.classList.toggle('active')
			inputBlock.classList.toggle('active');
		})
		
		let checkedInputs = []
		$(".caster__input-radioinput").change( function(){
			checkedInputs = $('.caster__input-block').find('input[type="radio"]:checked, input[type="checkbox"]:checked')
			if (checkedInputs.length == 0) {
				$('.caster__element-empty').remove()
				$('.caster__element').remove()
				$('.caster__element caster__element-number').remove()
				let emptyTemp = ` <span class="caster__element-empty">???????????????? ????????????</span>`
				$('.caster__input').append(emptyTemp)
			} else {
				$('.caster__element-empty').remove()
				$('.caster__element').remove()
				$('.caster__element caster__element-number').remove()
				
				// console.log(checkedInputs[0].value)
				let temp = `
				<span class="caster__element">${checkedInputs[0].value}</span>
				<span class="caster__element caster__element-number">+${checkedInputs.length}</span>
				`
				$('.caster__input').append(temp)
			}
			// console.log(checkedInputs)
			// checkedInputs.each(function() {
			// 	let save = 0
			// 	console.log('??????????????????????')
			// 	console.log(save)
			// 	console.log($(this).attr('data-procent'))
			// 	console.log(checkedInputs.length)
			//    save = (save + (+$(this).attr('data-procent'))) / checkedInputs.length
			//    console.log(save)
			// })
			countPrice()
		});

		function countProcent() {
			let save = 0;
			if (checkedInputs.length == 0) {
				save = 1;
				$('.caster__item-num').text(0)
				$('.caster__item-mouth').text('??????????????')
				setProgress(0)
				return 0
			} else {
				checkedInputs.each(function() {
					save = (save + (+$(this).attr('data-procent')))
				})
				
			}
			console.log(save/checkedInputs.length)
			if (save/checkedInputs.length < 0.08) {
				$('.caster__item-num').text(3)
				$('.caster__item-mouth').text('????????????')
				$('.caster__item-otext').text('3 ????????????')
				setProgress(30)
			} else if (save/checkedInputs.length < 0.1) {
				$('.caster__item-num').text(4)
				$('.caster__item-mouth').text('????????????')
				$('.caster__item-otext').text('4 ????????????')
				setProgress(50)
			} else if (save/checkedInputs.length < 0.11) {
				$('.caster__item-num').text(5)
				$('.caster__item-mouth').text('??????????????')
				$('.caster__item-otext').text('5 ??????????????')
				setProgress(60)
			} else {
				$('.caster__item-num').text(6)
				$('.caster__item-mouth').text('??????????????')
				$('.caster__item-otext').text('6 ??????????????')
				setProgress(70)
			}
			return (save/checkedInputs.length)
		}
		
		
		const rangeInput1 = $('.caster__radion-range-1')[0];
		const rangeInput2 = $('.caster__radion-range-2')[0];
		
		rangeInput1.addEventListener('input', () => {
			$('.caster__radio-value-1').text(rangeInput1.value)
			countPrice()

		})
	
		rangeInput2.addEventListener('input', () => {
			$('.caster__radio-value-2').text(rangeInput2.value)
			countPrice()
		})



		function countPrice() {
			let formula = Math.floor($('.caster__radion-range-1')[0].value * $('.caster__radion-range-2')[0].value * 55000 * countProcent());
			
			$('.caster__item-price').text(charTransform(formula*12))
			$('.caster__item-ytext').text(charTransform(formula*12))
			$('.caster__item-mtext').text(charTransform(formula))
			let price = charTransform(formula).split(' ')
			
			if (formula == 0) {
				$('.caster__item-mil').text(0)
				$('.caster__item-ts').text(0)
				$('.caster__item-rub').text(0)
				$('.caster__item-tmil').text('??????????????????')
				$('.caster__item-tts').text('??????????')
				$('.caster__item-trub').text('????????????')
			} else if (formula < 100000) {
				$('.caster__item-mil').text(0)
				$('.caster__item-ts').text(price[0])
				$('.caster__item-rub').text(price[1])
				$('.caster__item-tmil').text('??????????????????')
				$('.caster__item-tts').text('??????????')
				$('.caster__item-trub').text('????????????')
			} else if (formula < 1000000) {
				$('.caster__item-mil').text(0)
				$('.caster__item-ts').text(price[1])
				$('.caster__item-rub').text(price[2])
				$('.caster__item-tmil').text('??????????????????')
				$('.caster__item-tts').text('??????????')
				$('.caster__item-trub').text('????????????')
			} else {
				$('.caster__item-mil').text(price[0])
				$('.caster__item-ts').text(price[1])
				$('.caster__item-rub').text(price[2])
			}
	
		}
		
		function charTransform(n) {
				n += "";
				n = new Array(4 - n.length % 3).join("U") + n;
				return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
		}
	}


		



	//lotitie.animation
    lottie.loadAnimation({
		container: document.querySelector('.flot-1'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/1_1.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.flot-2'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/1_2.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.flot-3'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/1_3.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.flot-4'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/1_4.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.flot-5'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/1_5.json' // the path to the animation json
	  });

	  lottie.loadAnimation({
		container: document.querySelector('.train-1'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/2_1.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.train-2'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/2_2.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.train-3'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/2_3.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.train-4'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/2_4.json' // the path to the animation json
	  });


	  lottie.loadAnimation({
		container: document.querySelector('.auto-1'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/3_1.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.auto-2'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/3_2.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.auto-3'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/3_3.json' // the path to the animation json
	  });
	  lottie.loadAnimation({
		container: document.querySelector('.auto-5'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: '../animate/3_5.json' // the path to the animation json
	  });
	



	//! MOBILE FIX 100VH
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	//! MOBILE FIX 100VH END

	const proemSwiper = new Swiper('.proem__swiper', {
		// Optional parameters
		loop: true,
		effect: "fade",
		speed: 200,
		// If we need pagination
		pagination: {
		  el: '.proem__pagination',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.proem__btn-next',
		  prevEl: '.proem__btn-prev',
		},
	  });

	const titleSwiper = new Swiper('.swiper__title', {
		loop: true,
		spaceBetween: 32,

	  });

	  const imgSwiper = new Swiper('.swiper__img', {
		loop: true,
		spaceBetween: 32,

	  });
	

	const introSwiper = new Swiper('.intro__swiper', {
		loop: true,
		spaceBetween: 32,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		  },
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

	  introSwiper.controller.control = imgSwiper
	  imgSwiper.controller.control = introSwiper


	  const projectSwiper = new Swiper('.project__swiper', {
		loop: true,
		
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		  },

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
		
		$(".quiz-block input[name='phone']").mask("+7(999) 999-9999");
		$(".form__phone").mask("+7(999) 999-9999");
		$(".call__phone").mask("+7(999) 999-9999");
		$(".calculator__phone").mask("+7(999) 999-9999");


		//open/close burger-menu

	  const headerBurger = document.querySelector('.header__burger');
	  const headerInfo = document.querySelector('.header__navigation');

	  if (headerBurger) {
		  headerBurger.addEventListener('click', () => {
				  document.body.classList.toggle('active')
				headerBurger.classList.toggle('active');
				headerInfo.classList.toggle('active');
	
		  })

	  }


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



	  //close/open aplication 

	  const btnSolutionOrange = document.querySelectorAll('.btn__solution-orange');
	  const applicationCross = document.querySelector('.application__cross');
	  const application = document.querySelector('.application');

	  if (application) {
		btnSolutionOrange.forEach(item => {
			item.addEventListener('click', () => {
				application.classList.add('active');
				callBg.classList.add('active');
				document.body.classList.add('active');
			  })
		});
	

		applicationCross.addEventListener('click', () => {
			application.classList.remove('active');
			callBg.classList.remove('active');
			document.body.classList.remove('active');
		})

	  }

	  //close/open call

	  const headerBtnLand = document.querySelector('.header__btn-land');
	  const preludeBtnLand = document.querySelector('.prelude__btn-white');
	  const headerBtn = document.querySelector('.header__btn');
	  const proemBtn = document.querySelectorAll('.proem__btn');
	  const branchBtn = document.querySelectorAll('.branch__btn');
	  const callCross = document.querySelector('.call__cross');
	  const sailingBtn = document.querySelectorAll('.sailing__btn-call');
	  const callBlock = document.querySelector('.call');
	  const callBg = document.querySelector('.call__bg');

	  //???????????????? ???????????? ?? ???????????????? ??????
	  if (headerBtnLand) {
		  headerBtnLand.addEventListener('click', () => {
			  document.body.classList.add('active');
			  callBlock.classList.add('active');
			  callBg.classList.add('active');
		  })
		  preludeBtnLand.addEventListener('click', () => {
			  document.body.classList.add('active');
			  callBlock.classList.add('active');
			  callBg.classList.add('active');
		  })
		  
		}





	  if (headerBtn) {
		  headerBtn.addEventListener('click', () => {
			document.body.classList.add('active');
			headerBurger.classList.remove('active');
			headerInfo.classList.remove('active');
			callBlock.classList.add('active');
			callBg.classList.add('active');
			
	
		  })

	  }

	  //???????????????? ??????

	  if (callCross) {

		  callCross.addEventListener('click', () => {
			callBlock.classList.remove('active');
			callBg.classList.remove('active');
			document.body.classList.remove('active');
		  })
	  }

	  //???????????????? ?????? ???? ?????????? ???? ??????
	  if (callBg) {
		  callBg.addEventListener('click', () => {
			callBlock.classList.remove('active');
			callBg.classList.remove('active');
			if (application) {
				application.classList.remove('active');
			}
			if (calcBlock) {
				calcBlock.classList.remove('active');
			}
			document.body.classList.remove('active');
		  })
	  }

	  //???????????????? ?????? ???? ??????????
	  if (proemBtn) {
		proemBtn.forEach(item => {
			item.addEventListener('click', () => {
			  callBlock.classList.add('active');
			  callBg.classList.add('active');
			  document.body.classList.add('active')
		  })

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
	  

	  // open success message 

	  const successBlock = document.querySelector('.success');
	  const successContent = document.querySelector('.success__content');
	  	
	  if (successBlock) {
		successBlock.addEventListener('click', (event) => {
			if (event.target.contains(successBlock)) {
			  successBlock.classList.remove('active');
			  document.body.classList.remove('active')
		  }
		})

	  }



		  
	  //???????????????? ?????????????????? ?? ???????????????? ????????
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


	     // custom select

		 $('#shipSelect').each(function() {
			const _this = $(this),
				selectOption = _this.find('option'),
				selectOptionLength = selectOption.length,
				selectedOption = selectOption.filter(':selected'),
				duration = 450; // ???????????????????????? ???????????????? 
		
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
						class: 'calc__select',
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


	   //close/open calc

	   const calcBtnNext = document.querySelector('.calculator_btn_next');
	   const calcCross = document.querySelector('.calculator__cross');
	   const calcBlock = document.querySelector('.calculator__finish');

	   
	   if (calcBtnNext) {


			// ????????????????
			const in_1 = document.getElementById("monthDelivery");
			const in_2 = document.getElementById("price");
			const newSelectItem = document.querySelectorAll('.calc__select');
			const newSelect = document.querySelector('.new-select')
			const calcBtnNext = document.getElementById("calcBtnNext");
			let typeTs;
			// document.addEventListener('click', (event) => {
			// 	console.log(event.target);
			// })
			// console.log(typeTs);
			// ?????????????? ???????????????? ?? ??????/???????? ????????????
			const check = () => {
				typeTs = $('.new-select').text()
				calcBtnNext.disabled =
				in_1.value.length < 1  ||  in_2.value.length < 1 || typeTs == '?????? ????????????????????';
				// console.log(typeTs);
			} 

			// ?????????????????? ?????? ?????????????????? ??????????????
			in_1.addEventListener('input', check);
			in_2.addEventListener('input', check);
			newSelect.addEventListener('click', () => {
				newSelectItem.forEach(item => {
					item.addEventListener('click', () => {
						check();
					});

				})
			})

			// ?????????????????? ?????????? ?? ?????????? ????????????
			check();


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
			   $('.calculator__result').text(Math.floor(formCount * monthDelivery * price * (7.49/100)) + ' ??????');
			   $('.calculator__result-year').text(Math.floor(formCount * monthDelivery * price * (7.49/100) * 12) + ' ??????');

			})
			calcBtnNext.addEventListener('click', () => {
				callBg.classList.add('active')
				calcBlock.classList.add('active');
				})
			calcCross.addEventListener('click', () => {
				calcBlock.classList.remove('active');
				callBg.classList.remove('active')
			})
	   }

	   //checked calc form 
	   

	   



	  // ?????????????????? ?????? ?????????? help

	const acc = document.querySelectorAll(".help__accordion");

	acc.forEach(item => {
		item.addEventListener('click', () => {
			// console.log(item);
			if (item.classList.contains('active')) {
				return;
			} else {
				acc.forEach(el => {
					el.classList.remove('active');
					let info = el.nextElementSibling
					info.style.maxHeight = null;
				})
				item.classList.toggle("active");
				let panel = item.nextElementSibling;
				if (panel.style.maxHeight){
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}

			}
				
		})
	
	})
	

	if (document.getElementById("defaultOpen")) {
		document.getElementById("defaultOpen").click();
	}


	 // ???????????????? ?????????? ?????????????? ?????????????????? 

		let btn = document.querySelector('.capability__btn');
		let content = document.querySelector('.capability__info');
		let capabylitiLink = document.getElementById('sailingLinkonCapability');

	  if (content) {
		btn.addEventListener('click', () => {
			console.log(btn.innerHTML);
		  if (btn.innerHTML == "???????????? ??????????????????") {
			  btn.innerHTML = "????????????";
		  } else {
			  btn.innerHTML = "???????????? ??????????????????";
			  capabylitiLink.click();
		  }
		  content.classList.toggle('active');
		})
	  }





	  // ?????????????? ?????????????? ?? ??????????????

		document.querySelectorAll('a[href^="#"]').forEach(link => {

			link.addEventListener('click', function(e) {
				e.preventDefault();

				let href = this.getAttribute('href').substring(1);

				const scrollTarget = document.getElementById(href);

				let topOffset;
				// const topOffset = 0; // ???????? ???? ?????????? ???????????? ????????????

				if (document.querySelector('.sailing')) {
					topOffset = document.querySelector('.sailing').offsetHeight;
				} else {
					topOffset = 0; // ???????? ???? ?????????? ???????????? ????????????
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




	if ($('.tsct')) {
		$('.links__link-email').on('click', function() {
			$('.links__link-email').hide();
			$('.proposal').fadeIn( 100 );;
		})

	}


	if (document.querySelector('.quiz')) {
		function openQuis () {
			if ($('.quiz').length) {
				$('.quiz').addClass('quiz_active')
				compensateBody()
				checkCurrentStep()
				$('.b24-widget-button-wrapper').hide()
			}
		}
		function closeQuis () {
			if ($('.quiz_active').length) {
				$('.quiz_active').removeClass('quiz_active')
				setTimeout(function () {
					unCompensateBody()
				}, 500)
				$('.b24-widget-button-wrapper').show()
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
					$('.quiz__next').html('???????????????? ????????????')
				}
				checkCurrentStep()
			}
		}
		var strs = '';
		function addResult(step) {
	
			const title = step.find('.quiz__title').html()
			const checkedInputs = step.find('input[type="radio"]:checked, input[type="checkbox"]:checked')
			let answers = []
			if (checkedInputs.length) {
				checkedInputs.each(function (index, el) {
					console.log();
				})
			}
			const rangeInput = step.find('input[type="range"]')
			if (rangeInput.length) {
				rangeInput.each(function (index, el) {
					console.log();
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


			
			$('.quiz-results-item-res__val').each((index, item) => {
    
				if (index > 1) {

					strs = `${strs} ${$(item).text()},`
				}
				$('.quizResult').text(strs);
			})
		
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
				string = '??????????????'
			} else if (val % 10 > 4 || val % 10 === 0 || (val > 4 && val < 21)) {
				string = '????????????'
			} else if(val / 10 !== 1) {
				string = '??????????????'
			}
			$('.quiz__rangeValue span:nth-child(1)').html(val)
			$('.quiz__rangeValue span:nth-child(2)').html(string)
		})
	
	
	}
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


	if ($('.derivation')) {
		const derivTitle = ['?????????????? ???????????????? ????????????????????',
		'?????????????? ???????????????? ?????????????? ?????????????? ?????? ????????????????????',
		'?????????????? ?????????????????? ???????????? (DOTS)','?????????????? ?????????????????? ?? ???????????????????????????????????? (VMTS)',
		'?????????????? ?????????????????????? ????????????????????','?????????????? ??????????????????????????????','???????????????????????????????? ????????????????????'];
		const derivImg = ['img-1','img-2','img-3','img-4','img-5','img-6','img-7'];
		const derivLink = ['scb','scrt','dots','vmts','smt','svn','szo'];

		let i = 1
		while (i <= 3) {
			let randNum = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
			if ($('.entry__title').text() == derivTitle[randNum]) {
				continue;
			} else {
				if (($('.derivation__item-title').text()).includes(derivTitle[randNum])) {
					continue;
				} else {
					let derivPattern = `
					<a href="${derivLink[randNum]}.html" class="derivation__item">
						<img src="../images/dist/information/${derivImg[randNum]}.png" alt="img" class="derivation__item-img">
						<div class="derivation__item-title">${derivTitle[randNum]}</div>
					</a>
					`
					$('.derivation__row').append(derivPattern)	
					i++;
				}
			}
		}
	}

	// add paper mail



	const callForm = document.querySelector('.call__block');
	const callLuck = document.querySelector('.call__luck');
	const callAgree = document.querySelector('.call__agree');


	const applicationForm = document.querySelector('.application__block');
	const applicationLuck = document.querySelector('.application__luck');
	const applicationAgree = document.querySelector('.application__agree');


	const calculatorInfo = document.querySelector('.calculator__info');
	const calculatorGroup = document.querySelector('.calculator__group');
	const calcAgree = document.querySelector('.calc__agree');
	const calculatorLuck = document.querySelector('.calculator__luck');


	const quizResults = document.querySelector('.quiz-results');
	const quizMain = document.querySelector('.quiz-main');
	const quizNext = document.querySelector('.quiz__next');
	const quizLuck = document.querySelector('.quiz__luck');
	const quizNextClose = document.querySelector('.quiz__next-close');

	//get clientID
	function get_cookie ( cookie_name ) {
		var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
		if ( results )
			return ( unescape ( results[2] ) );
		else
			return null;
		}



	$.getJSON('https://ipapi.co/json/', function(data) {
		$('.header-ip').text((JSON.stringify(data.ip, null, 2).slice(1, -1)));
		});
	
	$('.header-ga').text(get_cookie('_ga'));
	$('.header-fbp').text(get_cookie('_fbp'));
	$('.header-uid').text(get_cookie('_ym_uid'));
	$('.header-lvid').text(get_cookie('tmr_lvid'));

	$('form').submit(function () {
		var formID = $(this).attr('id'); // ?????????????????? ID ??????????
		var formNm = $('#' + formID);
		console.log(formID);

		$.ajax({
			url: 'ajax/mail.php',
			type: 'POST',
			cache: false,
			data: { 'formID':formID },
			dataType: 'html',
			error: function(data) {
				console.log(data);

			}, 
			/* ???????? ???????????????????? ???????????? ?? ???????????????? ?? id erconts ?????????????????? ??????????????????*/  
			beforeSend: function() {

				
			},
			success: function(data) {
				dataLayer.push({'event': `${formID}`})
				console.log(data);
				if ($("input[name='name']")) {
					$("input[name='name']").val('');
				}
				if ($("input[name='phone']")) {
					$("input[name='phone']").val('');
				}
				if ($("input[name='email']")) {
					$("input[name='email']").val('');
				}
				
				if (formID.includes('quiz')) {
					quizResults.classList.add('active')
					quizMain.classList.add('active')
					quizNext.classList.add('active')
					quizLuck.classList.add('active')
					quizNextClose.classList.add('active')
					$('.quiz-sticky').css('display','none')
					$('.quiz-bottom').css('margin-top','0px')
					$('.quiz-content').css('padding-top','3.2em')
				}


				if (formID.includes('call')) {
					callForm.classList.add('active')
					callLuck.classList.add('active')
					callAgree.classList.add('active')
				}

				if (formID.includes('application')) {
					applicationForm.classList.add('active')
					applicationLuck.classList.add('active')
					applicationAgree.classList.add('active')
				}

				if (formID.includes('calc')) {
					calculatorInfo.classList.add('active')
					calculatorGroup.classList.add('active')
					calcAgree.classList.add('active')
					calculatorLuck.classList.add('active')
				}

				if (formID.includes('flot-') || formID.includes('tsct') || formID.includes('bur-') || formID.includes('auto-') || formID.includes('train-') || formID.includes('index-') || formID.includes('contacts-')) {
					if (successBlock) {

						successBlock.classList.add('active');
						document.body.classList.add('active');
					}
					
				}


			}
		})
		return false;
	});

	// // play video index.html
	// $('.proem__media video').each(function (index, el) {
	// 	if(index > 1) {
	// 		el.currentTime = 0;
	// 		el.pause();	
	// 	}
	// })

	$('.proem-wrapper').on('transitionend', (event) => {
		// $('.proem__media video').each(function (index, el) {
		// 	console.log(index)
		// 	console.log(el)
		// 	if(index > 1) {
		// 		el.currentTime = 0;
		// 	} 
		// 	el.pause();	
		// })
		// console.log($('.proem__media video'))
		$('.swiper-slide-prev .proem__media video')[0].pause();
		$('.swiper-slide-prev .proem__media video')[0].currentTime = 0;
		$('.swiper-slide-active .proem__media video')[0].play();
		$('.swiper-slide-next .proem__media video')[0].pause();
		$('.swiper-slide-next .proem__media video')[0].currentTime = 0;
		// console.log($('.swiper-slide-prev .proem__media video')[0])
		// console.log($('.swiper-slide-active .proem__media video')[0])
		// console.log($('.swiper-slide-next .proem__media video')[0])
		// $('.swiper-slide-active .proem__media video')[0].play();
	})

	//lazy load video

	var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
	console.log(lazyVideos)
	
	if ("IntersectionObserver" in window) {
		var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(video) {
			if (video.isIntersecting) {
			for (var source in video.target.children) {
				var videoSource = video.target.children[source];
				if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
				videoSource.src = videoSource.dataset.src;
				}
			}
	
			video.target.load();
			console.log(video.target.load())
			video.target.classList.remove("lazy");
			lazyVideoObserver.unobserve(video.target);
			}
		});
		});
	
		lazyVideos.forEach(function(lazyVideo) {
		lazyVideoObserver.observe(lazyVideo);
		});
	}


	// lazy load img

	// const imageObserver = new IntersectionObserver((entries, imgObserver) => {
	// 	entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 			const lazyImage = entry.target
	// 			console.log("lazy loading ", lazyImage)
	// 			lazyImage.src = lazyImage.dataset.src
	// 			lazyImage.classList.remove("lzy_img");
	// 			imgObserver.unobserve(lazyImage);
	// 		}
	// 	})
	// });
	// const arr = document.querySelectorAll('img.lzy-img')
	// arr.forEach((v) => {
	// 	imageObserver.observe(v);
	// })
	


	//?????????????? ????????????????

	const scrollElements = document.querySelectorAll(".js-scroll");
	const scrollElementsAnimation = document.querySelectorAll(".js-scroll-animation");

	const elementInView = (el, dividend = 1) => {

		const elementTop = el.getBoundingClientRect().top;
		return ( elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend );

	};

	// const elementOutofView = (el) => {

	// 	const elementTop = el.getBoundingClientRect().top;
	// 	return ( elementTop > (window.innerHeight || document.documentElement.clientHeight) );

	// };
	if (screen.width > 1024) {
		const displayScrollElement = (element) => {
			element.classList.add("scrolled");
		};
	
		const hideScrollElement = (element) => {
			element.classList.remove("scrolled");
		};
	
		const handleScrollAnimation = () => {
			scrollElements.forEach((el) => {
				if (elementInView(el, 1.04)) {
				displayScrollElement(el);
				}  // else if (elementOutofView(el)) {
				// hideScrollElement(el)
				// }
			})
		}
	
		window.addEventListener("scroll", () => { 
			handleScrollAnimation();
		});
		handleScrollAnimation();
	}
	

	





	// animate counter

	if (document.querySelector('.proem')) {
		$('.proem__list-number').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 6000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	}
})



