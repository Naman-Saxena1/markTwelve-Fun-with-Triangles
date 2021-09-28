const sidesOfTriangle = document.querySelectorAll(".side-inputs")
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn")
const outputHypotenuseValue = document.querySelector("#output-hypotenuse")

function hypotenuseBtnClickHandler()
{
    if(sidesOfTriangle[0].value==""||sidesOfTriangle[1].value=="")
    {
        outputHypotenuseValue.innerText="Please enter all inputs 😤"
    }
    else 
    {
        let a_side1= Number(sidesOfTriangle[0].value)
        let b_side2= Number(sidesOfTriangle[1].value)
        if(a_side1<0||b_side2<0)
        {
            outputHypotenuseValue.innerText=`Length of a side can only be positive`
        }
        else
        {
            let hypotenuse = Math.sqrt(a_side1**2+b_side2**2).toFixed(2)
            outputHypotenuseValue.innerText=`Hypotenuse : ${hypotenuse}`
        }
    }
}
calculateHypotenuseBtn.addEventListener("click",hypotenuseBtnClickHandler)