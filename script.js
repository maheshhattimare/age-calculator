const userInput=document.getElementById("date");
const button=document.getElementById("button");
const result=document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){

    let birthDate=new Date(userInput.value);

    let d1=birthDate.getDate();
    let m1=birthDate.getMonth() + 1;
    let y1=birthDate.getFullYear();

    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth() + 1;
    let y2=today.getFullYear();

    if (birthDate > today) {
        result.innerHTML = "Birth date cannot be in the future.";
        result.style.color = "orange";
        result.style.fontSize = "14px";
        setTimeout(() => {
            result.innerHTML=""
        }, 3000);
        return;
    }

    let d3,m3,y3;
    //year gap
    y3=y2-y1;

    //month gap
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }

    //day gap
    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }

    result.style.color="#fff";
    result.innerHTML=`You are <span>${y3}</span> years,  <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month){
    return new Date(year,month,0).getDate();
}
button.addEventListener('click' ,()=>{
    if(!userInput.value){
        result.innerHTML="Please select a valid birthdate.";
        result.style.color="orange";
        result.style.fontSize="14px";
        setTimeout(() => {
            result.innerHTML="";
        }, 3000);
    }
    else{
        calculateAge();
    }
    
})

