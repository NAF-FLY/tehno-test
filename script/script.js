document.addEventListener('DOMContentLoaded', () => {
	let menuBtn = document.querySelector('.menu-btn')
	let menu = document.querySelector('.menu')
	let logo = document.querySelector('.logo')

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
		logo.classList.toggle('active')
	})

	let arrow = document.querySelector('.arrow'),
		header = document.querySelector('.header')

	window.addEventListener('scroll', () => {
		arrow.classList.toggle('showA', window.scrollY > 500)
	})

	arrow.addEventListener('click', () => {
		header.scrollIntoView({ block: 'center', behavior: 'smooth' })
	})

	var swiper = new Swiper('.mySwiper', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 'auto',
		// spaceBetween: 10,
		breakpoints: {
			'@0.00': {
				slidesPerView: 3,
			},
			'@0.75': {
				slidesPerView: 3,
			},
			'@1.00': {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			'@1.50': {
				slidesPerView: 4,
				spaceBetween: 55,
			},
		},
	})
	// var swiper = new Swiper(".swiper-container", {
	//   slidesPerView: 4, // Количество отображаемых товаров
	//   spaceBetween: 55, // Расстояние между карточками
	//   navigation: {
	//     nextEl: ".swiper-button-next",
	//     prevEl: ".swiper-button-prev",
	//   },
	// });
})
