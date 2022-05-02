function navbar(){
    return `
    <h1 id="home">News</h1>
    <input type="text" id="search_input" placeholder="search">`;
}

// for search tab;
let search = (e) => {
    let query = document.getElementById("search_input").value;

    if(e.key === "Enter"){
        localStorage.setItem("query",JSON.stringify(query));
        window.location.href = "search.html";
    }
}



export {navbar,search};