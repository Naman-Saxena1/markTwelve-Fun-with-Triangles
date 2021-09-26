const angles = document.querySelectorAll(".input-angle")
const isTriangleBtn = document.querySelector("#isTriangle")
const outputMessage = document.querySelector("#output")

function isTriangleClickHandler()
{
   let sum=0;
   let angle1=Number(angles[0].value);
   let angle2=Number(angles[1].value);
   let angle3=Number(angles[2].value);  
   console.log(angle1,angle2,angle3)
   sum = angle1+angle2+angle3
   if(sum==180)
   {
        outputMessage.innerText="Hooray! The angles form a Triangle! 😎"
   }
   else
   {
        outputMessage.innerText="Oh no! The angles do not form a Triangle! 😓"
   }
}

isTriangleBtn.addEventListener("click",isTriangleClickHandler)