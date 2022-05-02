// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,search} from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let defaultnews = async () => {
    try{

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);

        let data = await res.json();

        console.log(data.articles);
        appenddefault(data.articles);
    }catch(err){
        console.log(err);
    }
}

let appenddefault = (data) => {
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

        newsdiv.append(image,headline);
        document.getElementById("results").append(newsdiv);
    });  
};



function countrynews(){
    let country = this.id;

        let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;

        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            appenddefault(res.articles);
        });
}

let sidebar = document.getElementById("sidebar").children;
for (let el of sidebar){
    el.addEventListener("click",countrynews);
}

/*let search = (e) => {
    let query = document.getElementById("search_input").value;

    if(e.key === "Enter"){
        localStorage.setItem("query",JSON.stringify(query));
        window.location.href = "search.html";
    }
}*/

document.getElementById("search_input").addEventListener("keydown",search);

defaultnews();

