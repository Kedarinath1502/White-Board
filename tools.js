let toolsCont = document.querySelector(".tool-cont")
let pencilToolCont = document.querySelector(".pencil-tool-cont")
let eraserToolCont = document.querySelector(".eraser-cont")
let optionsCont = document.querySelector(".opt-cont")
let pencil = document.querySelector(".pencil")
let eraser = document.querySelector(".eraser")
let uploadNote = document.querySelector(".upload-cont")
let stickyNote = document.querySelector(".stickyNote")
let pencilFlag = false
let eraserFlag = false
let optionsFlag = true;
let stickNoteFlag = false;

optionsCont.addEventListener("click", (e) => {
    optionsFlag = !optionsFlag;
    if(optionsFlag) openTools();
    else closeTools();
})

function openTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars")
    iconElem.classList.add("fa-times")
    toolsCont.style.display = "flex"
}

function closeTools(){
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times")
    iconElem.classList.add("fa-bars")
    toolsCont.style.display = "none"
    pencilToolCont.style.display = "none"
    eraserToolCont.style.display = "none"
}

pencil.addEventListener("click", (e) => {
    pencilFlag = !pencilFlag
    if(pencilFlag) pencilToolCont.style.display = "block"
    else pencilToolCont.style.display = "none"
})

eraser.addEventListener("click", (e) => {
    eraserFlag = !eraserFlag
    if(eraserFlag) eraserToolCont.style.display = "flex"
    else eraserToolCont.style.display = "none"
})

stickyNote.addEventListener("click", () => {
    stickNoteFlag = !stickNoteFlag

    if (stickNoteFlag) uploadNote.style.display = "block"
    else uploadNote.style.display = "none"
})