let slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0
let submitButton = document.querySelector('.submit')
var wrongAnswers = document.querySelectorAll('.wrong')
let correctAnswers = document.querySelectorAll('.correct')
let allHeader = document.querySelectorAll('allHeader')
let slideHeader = document.querySelector('.slide-1-header')


//all q/a will be stored in an array of arrays
//will need a for loop to cycle through them all, setting all of the questions to the applicable header
//and one anser to each body element

let questions = [
	'Who is the lead singer of Nirvana?'
]

let myQuestions = [
	["What Cleveland native made his album debut with MOTM?", "a) Eminem", "b) Machine Gun Kelly", "c) John Legend", "d) Kid Cudi", "Kid Cudi!"],
	["Which of Kanye's albums were released as apart of a friendly competition with 50 Cent?", "a) MBDTF", "b) Graduation", "c) Late Registration", "d) 808's", "Graduation!!"],
	]




submitButton.addEventListener('click', function(evt) {
	// for (let i = 0; i < slides.length; i++) {
	slides[currentSlide].className = 'slide'
	currentSlide = (currentSlide+1)%slides.length
	slides[currentSlide].className = 'slide showing'
	slideHeader.innerHTML = questions[0]
})


// let wrongAnswer = document.querySelector('.wrong')
// wrongAnswer.addEventListener('click', function(evt) {
// 	evt.preventDefault()
// 	if (evt.target.className === 'wrong') {
// 		console.log('wrong!')
// 	}
// })





	for (let i=0; i < wrongAnswers.length; i++) {
		// console.log('test1')
		wrongAnswers[i].addEventListener('click', function(evt) {
			evt.preventDefault()
			// console.log('test')
			if (evt.target.className === "wrong") {
			console.log('wrong!')
	
			}
		})

}

for (let i=0; i < correctAnswers.length; i++) {
	correctAnswers[i].addEventListener('click', function(evt) {
		evt.preventDefault()
		if (evt.target.className === "correct") {
		console.log('correct!')
			allHeader.innerHTML = myQuestions[0][0]
		}
	})

}

