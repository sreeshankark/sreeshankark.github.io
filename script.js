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
