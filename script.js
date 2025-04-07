const panels = document.querySelectorAll(".panels");

//function to toggle open
function toggleOpen(){
    this.classList.toggle("open");
}

panels.forEach(panel => 
    panel.addEventListener("click", toggleOpen)
);