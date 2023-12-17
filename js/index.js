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

