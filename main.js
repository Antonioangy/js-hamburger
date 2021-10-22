// collegamenti 
let hamburgerBtn = document.querySelector(".fa-bars") ;

let hamburgerClose = document.querySelector(".close") ;

let hamburgerMenu = document.querySelector(".hamburger-menu") ;

// apertura con click 
hamburgerBtn.addEventListener('click',
    function () {
    hamburgerMenu.classList.add("active");
  }
)
// chiusura con click 
hamburgerClose.addEventListener('click',
    function () {
    hamburgerMenu.classList.remove("active");
  }
)