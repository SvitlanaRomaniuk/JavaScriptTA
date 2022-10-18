// 1. 
const element = document.getElementById("test");
element.innerHTML = "Last";
document.getElementById("test").innerHTML = "Last";

// 2.
document.getElementsByClassName("image")[0].src = "cat.jpg";

// 3.
const nodeList = document.querySelectorAll("#text > p");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = 'Selector text ' + [i] + ': ' + nodeList[i].innerHTML;
}

// 4. 
const elements = document.querySelectorAll("#list > li");
let newList = document.createElement('p');
newList.innerHTML += elements[0].innerHTML + ", ";
newList.innerHTML += elements[4].innerHTML + ", ";
newList.innerHTML += elements[1].innerHTML + ", ";
newList.innerHTML += elements[3].innerHTML + ", ";
newList.innerHTML += elements[2].innerHTML;
listContent.append(newList);

// 5. 
document.querySelector("h1:nth-child(11)").style.backgroundColor = "green";
document.querySelector("h1:nth-child(11)").style.fontWeight = "bold";
document.querySelector("#myDiv > p:nth-child(1)").style.fontWeight = "bold";
document.querySelector("#myDiv > p:nth-child(2)").style.color = "red";
document.querySelector("#myDiv > p:nth-child(3)").style.textDecoration = "underline";
document.querySelector("#myDiv > p:nth-child(4)").style.fontStyle = "italic";
document.querySelector("#myDiv > p:nth-child(4)").style.fontStyle = "italic";

let newText = document.getElementById("myList").children[0].innerText + document.getElementById("myList").children[1].innerText + document.getElementById("myList").children[2].innerText;
document.getElementById("myList").innerHTML = newText;
document.querySelector("span").style.display = 'none';

// 6.
let myInput1 = prompt("Input 1");
let myInput2 = prompt("Input 2");
document.getElementById("input1").value = myInput1;
document.getElementById("input2").value = myInput2;
function swapValues() {
    let tmp = document.getElementById("input1").value;
    document.getElementById("input1").value = document.getElementById("input2").value;
    document.getElementById("input2").value = tmp;
}
swapValues();


// 7.
let newDoc = document.createElement("main");
newDoc.className = "mainClass check item";
let newDiv = document.createElement("div");
newDiv.id = "myDiv";
newDoc.appendChild(newDiv);
newDiv.insertAdjacentHTML('afterend', '<p>First paragraph</p>');
document.getElementsByTagName("body")[0].appendChild(newDoc);
