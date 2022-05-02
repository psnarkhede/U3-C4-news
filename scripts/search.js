// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar,search} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();



let searchquery = async () => {
    let query = JSON.parse(localStorage.getItem("query"));

    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data = await res.json();

        appendsearch(data.articles);
    }catch(err){
        console.log(err);
    }
};

let appendsearch = (data) => {
    document.getElementById("results").innerHTML = null;

    data.map((el) => {
        let newsdiv = document.createElement("div");
        newsdiv.setAttribute("class","news");
        newsdiv.addEventListener("click",()=>{
            localStorage.removeItem("news");
            localStorage.setItem("news",JSON.stringify(el));
            window.location.href = "news.html";
        })

        let image = document.createElement("img");
        image.setAttribute("class","image");
        image.src = el.urlToImage;

        let headline = document.createElement("h3");
        headline.innerText = el.title;

        newsdiv.append(image, headline); 
        document.getElementById("results").append(newsdiv);
    });
    
}

searchquery();

document.getElementById("home").addEventListener("click",() => {
    window.location.href = "index.html";
});


document.getElementById("search_input").addEventListener("keydown",search);