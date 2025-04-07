const panels = document.querySelectorAll('.panel')

//function to toggle open
function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    if(e.propertyName.includes("flex")){
        this.classList.toggle('open-active');
    }
    
}
panels.forEach(panel => panel.addEventListener("click", toggleOpen));

//transitionend event to bring in the other words -top and bottom words
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));