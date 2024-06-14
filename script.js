const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something to add!...");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listCont.addEventListener("click", function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        console.log(e.target.tagName);
        
        e.target.parentElement.remove();
    }
    saveData();
},false);


function saveData(){
    localStorage.setItem("data", listCont.innerHTML);
}
function showTask(){
    listCont.innerHTML = localStorage.getItem("data");
}
showTask();