const Content = document.getElementById("Content");
const MyTextBox = document.getElementById("MyTextBox");
const Button = document.getElementById("Button");
const Add = document.getElementsByClassName("Add");
const Remove = document.getElementsByClassName("Remove");
const Clear = document.getElementsByClassName("Clear");


function Addelements() {
    const paragraph = document.createElement("p");
    paragraph.innerText = MyTextBox.value;
    Content.appendChild(paragraph);
}

function RemoveLastItem() {
    const paragraph = MyTextBox.value;
    if(paragraph.length > 0) {
        const lastposition = paragraph.length - 1; 
        Content.removeChild(paragraph[lastposition]);
    }
}

function ClearAll() {
    const paragraph = MyTextBox.value;
    if(paragraph.length > 0) {
        Content.removeChild(paragraph);
    }
}

Add.addEventListener("click",Addelements);
Remove.addEventListener("click",RemoveLastItem);
Clear.addEventListener("click",ClearAll);
