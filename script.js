document.addEventListener("DOMContentLoaded", function () {
	// Observing elements for visibility changes
	const elements = document.querySelectorAll(".hidden");
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			entry.target.classList.toggle("visible", entry.isIntersecting);
		});
	}, { threshold: 0.2 });

	elements.forEach(element => observer.observe(element));

	// Aurora animation logic
	const auroras = document.querySelectorAll(".aurora");

	auroras.forEach(aurora => {
		let posX = Math.random() * window.innerWidth;
		let posY = Math.random() * window.innerHeight;
		let speedX = (Math.random() - 0.5) * 4;
		let speedY = (Math.random() - 0.5) * 4;
		let rotationAngle = 0;
		let rotationSpeed = (Math.random() - 0.5) * 0.2;

		function moveAurora() {
			posX += speedX;
			posY += speedY;
			rotationAngle += rotationSpeed;

			// Random movement adjustments
			if (Math.random() < 0.02) {
				speedX += (Math.random() - 0.5) * 2;
				speedY += (Math.random() - 0.5) * 2;
				rotationSpeed += (Math.random() - 0.5) * 0.1;
			}

			// Bounce off edges
			if (posX < 0 || posX > window.innerWidth - 200) speedX *= -1;
			if (posY < 0 || posY > window.innerHeight - 200) speedY *= -1;

			aurora.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotationAngle}deg)`;

			requestAnimationFrame(moveAurora);
		}

		moveAurora(); // Start animation for each aurora
	});

	// Menu toggle functionality
	let menuIcon = document.querySelector('#menu-icon');
	let navbar = document.querySelector('.navbar');

	if (menuIcon && navbar) {
		menuIcon.onclick = () => {
			menuIcon.classList.toggle('bx-x');
			navbar.classList.toggle('open');
		};
	}
});

function show(x) {
	x.style.opacity = "0";
	x.style.display = "block"; // Show first
	setTimeout(() => {
		x.style.transition = "opacity 0.3s ease-in";
		x.style.opacity = "1";
	}, 50); // Slight delay to ensure visibility before transition
}

function hide(x) {
	x.style.transition = "opacity 0.3s ease-in";
	x.style.opacity = "0";
	setTimeout(() => {
		x.style.display = "none"; // Hide after transition completes
	}, 350); // Ensure transition completes before hiding
}

function move() {
	const navbar = document.querySelector(".navbar");
	const photo = document.querySelector(".name");
	const name = document.querySelector(".name1");
	const name1 = document.querySelector(".name2");
	const me1 = document.querySelector(".me");
	const home = document.querySelector(".home-content");
	const about = document.querySelector("#about");
	let navbarWidth = navbar.offsetWidth;
	navbar.style.transform = `translateX(${navbarWidth * 0.5}px)`;
	navbar.style.display = `block`;
	show(photo);
	me1.style.transition = "opacity 0.3s ease-in";
	me1.style.opacity = "0";
	home.style.transition = "opacity 0.3s ease-in";
	home.style.opacity = "0";
	about.style.transition = "opacity 0.3s ease-in";
	about.style.opacity = "0";
	setTimeout(() => {
		if (window.scrollY !== 0) {
			me1.style.display = "none"; // Hide only if user is still scrolled down
			home.style.display = "none"; // Hide only if user is still scrolled down
			about.style.display = "block";
			about.style.opacity = "1";// Hide only if user is still scrolled down
		}
	}, 350);
	show(name);
	show(name1);
}

function reset() {
	const navbar = document.querySelector(".navbar");
	const photo = document.querySelector(".name");
	const name = document.querySelector(".name1");
	const name1 = document.querySelector(".name2");
	const me1 = document.querySelector(".me");
	const home = document.querySelector(".home-content");
	const about = document.querySelector("#about");
	show(me1);
	show(home);
	navbar.style.transform = `translateX(0px)`;
	navbar.style.display = `flex`;
	hide(photo);
	hide(name);
	hide(name1);
	about.style.transition = "opacity 0.3s ease-in";
	about.style.opacity = "0";
	setTimeout(() => {
		about.style.display = "none"; // Hide after transition completes
	}, 350);
}


document.addEventListener("DOMContentLoaded", function () {

	let lastScrollTop = window.scrollY;

	window.addEventListener("scroll", function () {
		let scrollTop = window.scrollY;

		if (scrollTop > 0 && lastScrollTop === 0) {
			move();
		} else if (scrollTop === 0) {
			reset();
		}
	});
	navbar.style.transition = "transform 0.8s ease-in-out";
	lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".navbar a");

	navLinks.forEach(link => {
		link.addEventListener("click", function () {
			// Remove 'active' class from all links
			navLinks.forEach(nav => nav.classList.remove("active"));

			// Add 'active' class to clicked link
			this.classList.add("active");
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const aboutLink = document.querySelector(".navbar a[href='#about']");
	const homeLink = document.querySelector(".navbar a[href='#home']");

	aboutLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default anchor behavior

		// Scroll a little down (adjust value as needed)
		window.scrollBy({
			top: 100, // Scrolls down by 100 pixels
			behavior: "smooth"
		});
	});
	homeLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default anchor behavior

		// Scroll a little down (adjust value as needed)
		window.scrollBy({
			top: -100, // Scrolls down by 100 pixels
			behavior: "smooth"
		});
	});
});





