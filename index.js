var links = document.getElementById("links");
var menu = document.getElementById("menu");    
    links.addEventListener("click",() => menu.style.display="block");
    menu.addEventListener("mouseleave",() => {
        setTimeout(() => {
            menu.style.display="none";
        }, 1000)
    })
       

