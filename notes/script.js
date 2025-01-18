const notes = document.querySelector(".notes");
const button = document.querySelector(".button");
let noted = document.querySelectorAll(".write");
//const clearButton = document.querySelector(".clear-button");

function prevNotes(){
    notes.innerHTML = localStorage.getItem("noted");
}

prevNotes();

function updateStorage(){
    
    localStorage.setItem("noted",notes.innerHTML);
}

button.addEventListener("click", ()=>{
    let inbox = document.createElement("p");
    let img = document.createElement("img");
    inbox.className = "write";
    inbox.setAttribute("contenteditable", "true");
    img.src = "del.png";
    notes.appendChild(inbox).appendChild(img);
})


notes.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        noted = document.querySelectorAll(".write");
        noted.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

/*
clearButton.addEventListener("click", () => {
    notes.innerHTML = "";
    updateStorage();
});
*/