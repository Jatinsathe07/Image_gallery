#Artify-Image Gallery

The repository contains a artify image gallery webpage build using the html, css and javascript.
Please follow the instructions to set it up.

**Feature**

1. Show all images in fronts
2. select a specific category images
3. images hover effect

### Instructions

1. Open the folder in vscode and run ``npm run dev``


**Javascript logic to filters image**

const filterbutton =document.querySelectorAll(".filter-button button");
const filtercard =document.querySelectorAll(".filterable-card .card");

const filterCards =e=>{
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
 
filtercard.forEach(card=>{
  card.classList.add("hide");
  if(card.dataset.name ===e.target.dataset.name || e.target.dataset.name === "all"){
    card.classList.remove("hide");
  }
})

};

filterbutton.forEach(button=>button.addEventListener('click',filterCards));


