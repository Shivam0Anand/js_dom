//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");

//Select all of the list items with a class of "second".
document.getElementsByClassName("second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol li.third");

//Give the section with an id of container the text "Hello!".
var hello = document.createElement("p");
hello.innerText = "Hello!";
container.appendChild(hello);

//Add the class main to the div with a class of footer.
foot = document.querySelector(".footer");
foot.classList.add("main");

//Remove the class main on the div with a class of footer.
foot.classList.remove("main");

//Create a new li element.
var addLi = document.createElement("li");

//Give the li the text "four".
addLi.innerText = "four";

//Append the li to the ul element.
document.querySelector("ul").appendChild(addLi);

//Loop over all of the list inside the ol tag and give them a background color of "green".
var ol = document.querySelectorAll("ol li");
for (var i = 0; i < ol.length; i++) {
  ol[i].style.color = "green";
}

//Remove the div with a class of footer.
footer.remove();
