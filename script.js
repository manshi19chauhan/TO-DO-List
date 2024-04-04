const inputBox= document.getElementById("inputtask");
const task=document.getElementById("task");

function addtask(){
    if(inputBox.value==="")
    {
        alert("NO TASK!! BAD HABIT");
    }
    else{
        let li= document.createElement('li');
        li.innerHTML= inputBox.value;
        task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

task.addEventListener("click" , function(e)
{
    if(e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}

function showTask(){
    task.innerHTML = localStorage.getItem("data");
}

showTask();