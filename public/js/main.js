/* * * * * * Initialize facts and answers * * * * * */
// the facts object initialized with random values

const facts = {
  test: "Y",
  positive: "N",
  prolonged: "Y",
  testedMember: "N",
  isolation: "Y",
  prolongedCloseContact: "N",
  travelledOut: "Y",
  coughing: "Y",
  shortnessOfBreath: "N",
  difficultyBreathing: "Y",
  fever: "N",
  chills: "Y",
  repeatedShakingWithChills: "N",
  musclePain: "Y",
  lossOfTaste: "Y",
  soreThroatOrHeadache: "N",
  confusionDisorientationDrowsiness: "Y",
  unusualFatigue: "N",
};

const answers = {
  name: undefined,
  test: undefined,
  positive: undefined,
  prolonged: undefined,
  testedMember: undefined,
  isolation: undefined,
  prolongedCloseContact: undefined,
  travelledOut: undefined,
  coughing: undefined,
  shortnessOfBreath: undefined,
  difficultyBreathing: undefined,
  fever: undefined,
  chills: undefined,
  repeatedShakingWithChills: undefined,
  musclePain: undefined,
  lossOfTaste: undefined,
  soreThroatOrHeadache: undefined,
  confusionDisorientationDrowsiness: undefined,
  unusualFatigue: undefined,
}


/* * * * * * Attach event listeners to all submit buttons * * * * * */
const nameInputEl = document.getElementById('nameInput');
document.querySelector('button[data-answer-type="text"]').addEventListener('click', (e) => {
  if (nameInputEl.value === "")
    document.getElementById("nameInputReminder").style.display = "block";
  else {
    answers.name = nameInputEl.value;
    // go to next question and play animations
    questionEls[1].classList.add("question-container--slide-out");
    // slide in next question
    questionEls[2].classList.remove("question-container--on-standby");
    questionEls[2].classList.add("question-container--slide-in");
  }
})

const questionEls = Array.from(document.querySelectorAll(".question-container"));

for (let i = 1; i < questionEls.length; i++) {
  questionEls[i].classList.add("question-container--on-standby");
}

// neat little function for getting current question: https://stackoverflow.com/questions/22119673/find-the-closest-ancestor-element-that-has-a-specific-class
function findAncestor (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

// Event listeners for submit buttons of Choice questions
const choiceBtns = Array.from(document.querySelectorAll('button[data-answer-type="choice"]'));
choiceBtns.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    // skip the first button because it is in Introduction, not a question
    if (i != 0) {
      const question = btn.dataset.question;
      const answer = btn.dataset.choice;
      facts[question] = answer;
      answers[question] = answer;
    }

    // play animations
    const currentQuestion = findAncestor(btn, "question-container");
    const currentCardNumber = parseInt(currentQuestion.dataset.number);
    const nextQuestion = document.querySelector(`div[data-number="${currentCardNumber + 1}"]`);
    console.log('nextQuestion', nextQuestion)
    currentQuestion.classList.add("question-container--slide-out");
    // slide in next question
    nextQuestion.classList.remove("question-container--on-standby");
    nextQuestion.classList.add("question-container--slide-in");

    // if it is the last submit button:
    // get diagnosis and updates the state
    console.log('currentCardNumber', currentCardNumber)
    if (currentCardNumber === 19) {
      const esUrl = 'diagnosis/';
      console.log('here man', facts)
      // return makePostCall(facts);
      const requestUrl = `${esUrl}${JSON.stringify(facts)}`;
      return fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
          return displayResult(data)
        });
    }
  })
})


function displayResult(percentage) {
  const disease = "Covid"
  let percentageHTML = `Diagnosis confidence: ${percentage}%`;
  document.getElementById('username').innerHTML = answers.name;
  if(percentage < 75){
    document.getElementById('youhave').innerHTML = "You probably don't have ";
  } else {
    document.getElementById('youhave').innerHTML = "You probably have ";
  }
  document.getElementById('disease').innerHTML = disease;
  document.getElementById('percentage').innerHTML = percentageHTML;
  setTimeout(() => 
    document.querySelector('.fixed-container').style.overflow = 'auto',
    800
  );

  // display / review user's answer
  for (const ans in answers) {
    document.getElementById(`review-${ans}`).innerHTML += `${answers[ans]}`;
  }

  console.log('final piece')
}
