// Copyright 2025 sreeshankar.github.io

// This file is a part of
// https://github.com/sreeshankark/sreeshankark.github.io

// Author: Sreeshankar K (https://github.com/sreeshankark) 

var tabs = document.getElementsByClassName("tab");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
	for (tab of tabs) {
		tab.classList.remove("active-tab");
	}
	for (tabcontent of tabcontents) {
		tabcontent.classList.remove("active-content");
	}
	event.currentTarget.classList.add("active-tab");
	document.getElementById(tabname);
	tabname.classList.add("active-content");
}

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

		if (Math.random() < 0.02) {
			speedX += (Math.random() - 0.5) * 2;
			speedY += (Math.random() - 0.5) * 2;
			rotationSpeed += (Math.random() - 0.5) * 0.1;
		}


		if (posX < 0 || posX > window.innerWidth - 200) speedX *= -1;
		if (posY < 0 || posY > window.innerHeight - 200) speedY *= -1;

		aurora.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotationAngle}deg)`;

		requestAnimationFrame(moveAurora);
	}

	moveAurora();
});

var menu = document.getElementById("menu");

function openmenu() {
	menu.style.right = "0";
}

function closemenu() {
	menu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwz1BZ6IrIbFRwo3Z2HoEix4O2klvaC3ul0Plv-Zf6vzOZrEw1C4W5Zb73CLzGIMeeo/exec'
const form = document.forms['submit-to-google-sheet']
const sent = document.getElementById("sent")

form.addEventListener('submit', e => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => {
				sent.innerHTML = "Message sent sucessfully"
				setTimeout(function() {
					sent.innerHTML = ""
				}, 5000);
				form.reset();
			})
		.catch(error => console.error('Error!', error.message))
})