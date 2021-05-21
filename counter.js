const display=document.querySelector("#display");
const body=document.querySelector("#body");
const container=document.querySelector("#block");
const intro=document.querySelector("#text");

//buttons
const inc=document.querySelector("#increase");
const dec=document.querySelector("#decrease");

const btn_theme=document.querySelector("#btn-theme");

//intial value
let counter=0;
function validate()
{
    let theme=0;
    if (btn_theme.checked)
    {
        //console.log("Dark Mode");
        theme=1;
        setTheme(theme);
    }
    else
    {
        //console.log("Day theme");
        setTheme(theme);
    }
}


function setTheme(theme)
{
    if(theme==1)
    {
        console.log("Dark");
        body.style.backgroundColor ="#000000";
        container.style.borderColor = "#FFFFFF";
        intro.style.color="#FFFFFF";

    }
    else
    {
        console.log("Light");
        body.style.backgroundColor ="#82b74b";
        container.style.borderColor = "#000000";
        intro.style.color="#000000";
    }

}



validate();
//
function increaseCount()
{
    console.log("inc called");
    counter++;
    console.log({counter});
    setCounterValue(counter);
}
//
function descreaseCount()
{
    if(counter==0)
    {   
        
        setCounterValue(counter);
        return;
    }
    console.log("des called");
    counter--;
    if(counter<0)
    {
        counter=0;
    }
    console.log({counter});
    setCounterValue(counter);
}

//s
function setCounterValue(counter)
{
    if(counter==0)
    {
        display.style.color="#e62e00";
    }
    else
    {
        display.style.color="#e0e0d1";
    }
    display.innerHTML=counter;
}




//Events
//inc.addEventListener("click",increaseCount(counter),false);
//dec.addEventListener("click",descreaseCount(counter),false);




