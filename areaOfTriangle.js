const baseLength = document.querySelector("#base")
const heightLength = document.querySelector("#height")
const calculateAreaButton = document.querySelector("#calculateAreaBtn")
const outputArea = document.querySelector("#output-area")

function areaButtonClickHandler()
{
    let base = Number(baseLength.value) 
    let height = Number(heightLength.value)
    let area = (1/2)*(base*height)
    outputArea.innerText=`Area of triangle : ${area}`
}

calculateAreaButton.addEventListener("click",areaButtonClickHandler)