const containerQuestion = document.querySelectorAll(".container-question");

containerQuestion.forEach((question, index, arr) =>{
	question.addEventListener("click", event =>{	
		question.classList.toggle("strong")
		question.nextElementSibling.classList.toggle("open")	
	});
});