const angles = document.querySelectorAll(".input-angle")
const isTriangleBtn = document.querySelector("#isTriangle")
const outputMessage = document.querySelector("#output")

function isTriangleClickHandler()
{
   let sum=0;
   let angle1=Number(angles[0].value);
   let angle2=Number(angles[1].value);
   let angle3=Number(angles[2].value);
   sum = angle1+angle2+angle3
   if(angles[0].value==""||angles[1].value==""||angles[2].value=="")
   {
    outputMessage.innerText="Please enter all inputs 😤"
   }
   else if(angle1<0||angle2<0||angle3<0)
   {
    outputMessage.innerText="Please give positive angles, negative angles are not allowed 😤"
   }
   else if(sum==180)
   {
    outputMessage.innerText="Hooray! The angles form a Triangle! 😎"
   }
   else
   {
    outputMessage.innerText="Oh no! The angles do not form a Triangle! 😓"
   }
}

isTriangleBtn.addEventListener("click",isTriangleClickHandler)