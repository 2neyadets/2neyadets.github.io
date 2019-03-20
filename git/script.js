var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");






var li = document.querySelector("li");
var liAll = document.querySelectorAll("li");

function createDeleteBotton(i) {
	var deleteButton = document.createElement("button");
	deleteButton.classList.add("deleteButtonClass")
	deleteButton.appendChild(document.createTextNode("Delete"));
	// liAll = document.querySelectorAll("li");
	document.querySelectorAll("li")[i].appendChild(deleteButton);
	// input.value = "";
}

for (var i = 0; i < document.querySelectorAll("li").length; i++) {
	createDeleteBotton(i);
}





function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	// liAll = document.querySelectorAll("li");
	createDeleteBotton(document.querySelectorAll("li").length-1);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(event){
	ul = document.querySelector("ul");

	if (event.target !== ul) {
		//вычёркивание строчки
		event.target.classList.toggle("done");
		//if для удаления по кнопке
		if (event.target.className.indexOf("deleteButtonClass") >= 0) {
			event.target.parentElement.remove();
		}
	}
})

ul.addEventListener("click", function(event){
	console.log(event);
})





