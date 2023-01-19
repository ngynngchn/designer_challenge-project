let newsletterInput = document.getElementById("newsletter");
let confirmation = document.querySelector(".confirmation");
let form = document.querySelector("form");

function getEmail() {
	if (newsletterInput.value !== "") {
		console.log("Your Email: " + newsletterInput.value);
		form.style.display = "none";
		confirmation.style.display = "block";
	}
}

function goBack() {
	form.style.display = "block";
	confirmation.style.display = "none";
}
