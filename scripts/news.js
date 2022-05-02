// Ude Import export (MANDATORY)

import {navbar,search} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("news"));

console.log(data);

document.getElementById("headline").innerText = data.title;
document.getElementById("image").src = data.urlToImage;
document.getElementById("description").innerText = data.description;
document.getElementById("content").innerText = data.content;

document.getElementById("home").addEventListener("click",() => {
    window.location.href = "index.html";
})

document.getElementById("search_input").addEventListener("keydown",search);