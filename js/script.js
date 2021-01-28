let menuBtn = document.querySelector(`.nav-toggle`);
let nav= document.querySelector(`.menu`);
let searchBtn = document.querySelector(`.search-btn`);
let search = document.querySelector(`.find`);
function showMenu(){

    if(nav.style.display ==="block"){
        
        nav.style.display= "none";
    }else{
        nav.style.display="block";
    }
}

menuBtn.addEventListener('click',showMenu);
