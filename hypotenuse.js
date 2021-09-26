const sidesOfTriangle = document.querySelectorAll(".side-inputs")
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn")
const outputHypotenuseValue = document.querySelector("#output-hypotenuse")

function hypotenuseBtnClickHandler()
{
    let a_side1= Number(sidesOfTriangle[0].value)
    let b_side2= Number(sidesOfTriangle[1].value)
    let hypotenuse = Math.sqrt(a_side1**2+b_side2**2)
    outputHypotenuseValue.innerText=`Hypotenuse : ${hypotenuse}`
}

calculateHypotenuseBtn.addEventListener("click",hypotenuseBtnClickHandler)