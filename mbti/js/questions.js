//import 사용 시 html script defer 앞에 type="module" 기재할것.
import {questions} from './data.js'

//document.queryselector ()안에 것을 화면에 출력하라는 메서드(document)
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0 //현재 질문의 번호가 몇번인지 표시하는 변수
let mbti = '' //MBTI 결과

//renderQuestion: 묶는 함수 (화면에 질문을 랜더링하는 함수)
//innerHTML: JavaScript에서 HTML 요소의 내용을 변경하거나 가져오는 데 사용되는 메서드
function renderQuestion() {
	const question = questions[currentNumber]
	numberEl.innerHTML = question.number
	questionEl.innerHTML = question.question
	choice1El.innerHTML = question.choices[0].text
	choice2El.innerHTML = question.choices[1].text
	progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {
	//length 배열데이터에 들어있는 갯수가 몇개인지 알아내는 코드
	if (currentNumber === questions.length - 1) {
		showResultPage()
		return
	}
	const question = questions[currentNumber]
	mbti = mbti + question.choices[choiceNumber].vlaue 
	//mbti = ''+ 'i' = 'i' + 'n' = 'in' = 'infj'
	currentNumber = currentNumber + 1
	renderQuestion()
}

function showResultPage() {
	location.href = '/results.html?mbti=' + mbti //쿼리스트링
}

choice1El.addEventListener('click', function () {
	nextQuestion(0)
})
choice2El.addEventListener('click', function () {
	nextQuestion(1)
})

renderQuestion()