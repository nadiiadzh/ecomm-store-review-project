let menuBtn = document.querySelector(`.nav-toggle`);
let nav= document.querySelector(`.menu`);

function showMenu(){

    if(nav.style.display ==="block"){
        
        nav.style.display= "none";
    }else{
        nav.style.display="block";
    }
}
menuBtn.addEventListener('click',showMenu);
