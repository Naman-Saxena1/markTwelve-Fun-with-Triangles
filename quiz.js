const quizform = document.querySelector("#quiz-form")
const submitAnswersBtn = document.querySelector("#submit-answers-btn")
const quizScore = document.querySelector("#score")

const correctAns = ["40°","Equilateral","35 cm"]

function submitButtonClickHandler()
{
    let score=0;
    let index=0;
    if((document.querySelector('input[type=radio]:checked'))!=null)
    {
        let formResults = new FormData(quizform)
        for(let value of formResults.values())
        {
            if(value==correctAns[index])
            {
                ++score
            }
            ++index
        }
        quizScore.innerText=`Your score : ${score}/3`
    }
    else
    {
        quizScore.innerText=`Please answer atleast 1 question`
    }
}

submitAnswersBtn.addEventListener("click",submitButtonClickHandler)