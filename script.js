// baad ma
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
	header.classList.toggle("shadow", window.scrollY > 0);
});

// responsive
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("active");
};
window.onscroll = () => {
	menu.classList.remove("bx-x");
	navbar.classList.remove("active");
};

var swiper = new Swiper(".home", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
var swiper = new Swiper(".coming-container", {
	loop: true,
	spaceBetween: 20,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		568: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		968: {
			slidesPerView: 5,
		},
	},
});

onclick="playVideo('Dhoom Machale Dhoom.mp4')"

//services

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove('expanded');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add('expanded');
            }
        });
    }
});
