const baseLength = document.querySelector("#base")
const heightLength = document.querySelector("#height")
const calculateAreaButton = document.querySelector("#calculateAreaBtn")
const outputArea = document.querySelector("#output-area")

function areaButtonClickHandler()
{
    if(baseLength.value==""||heightLength.value=="")
    {
        outputArea.innerText="Please enter all inputs 😤"
    }
    else 
    {
        let base = Number(baseLength.value) 
        let height = Number(heightLength.value)
        if(base<0||height<0)
        {
            outputArea.innerText=`Please re-enter values, length of both base and height should be positive`
        }
        else
        {
            let area = (1/2)*(base*height)
            outputArea.innerText=`Area of triangle : ${area}`
        }
    }
}

calculateAreaButton.addEventListener("click",areaButtonClickHandler)