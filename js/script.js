const questions = document.querySelectorAll(".container-question");

questions.forEach((question) => {
	question.addEventListener("click", handleClick);
});

function handleClick(event) {
	const question = event.target;
	if (question.classList.contains("active")) {
		question.classList.remove("active");
	} else {
		const elementsActives = document.querySelectorAll(".active");
		elementsActives.forEach((elementActive) => {
			elementActive.classList.remove("active");
		});
		question.classList.add("active");
	};
};