document.addEventListener("DOMContentLoaded", () => {
	let menuBtn = document.querySelector(".menu-btn")
	let menu = document.querySelector(".menu")
	let links = menu.querySelectorAll("a")
	let logo = document.querySelector(".logo")

	menuBtn.addEventListener("click", function () {
		menuBtn.classList.toggle("active")
		menu.classList.toggle("active")
		logo.classList.toggle("active")

		if (menu.classList.contains("active")) {
			document.body.style.overflowY = "hidden"
		} else {
			document.body.style.overflowY = "auto"
		}
	})

	let arrow = document.querySelector(".arrow"),
		header = document.querySelector(".header")

	window.addEventListener("scroll", () => {
		arrow.classList.toggle("showA", window.scrollY > 500)
	})

	arrow.addEventListener("click", () => {
		header.scrollIntoView({ block: "center", behavior: "smooth" })
	})

	let swiper = new Swiper(".mySwiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		slidesPerView: "auto",
		// spaceBetween: 10,
		breakpoints: {
			"@0.00": {
				slidesPerView: 3,
			},
			"@0.75": {
				slidesPerView: 3,
			},
			"@1.00": {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			"@1.50": {
				slidesPerView: 4,
				spaceBetween: 55,
			},
		},
	})

	// Добавляем обработчик событий click к каждой ссылке
	links.forEach(function (link) {
		link.addEventListener("click", function (event) {
			// Убираем класс "active" у элемента меню
			menu.classList.remove("active")
			menuBtn.classList.remove("active")
			logo.classList.remove("active")
			// Добавляем класс "active" только к текущей ссылке
			link.classList.add("active")

			if (menu.classList.contains("active")) {
				document.body.style.overflowY = "hidden"
			} else {
				document.body.style.overflowY = "auto"
			}
		})
	})
})
