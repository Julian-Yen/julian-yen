const longshan = document.querySelector(".longshan");
const park = document.querySelector(".park");
const underground = document.querySelector(".underground");
const toggle = document.querySelector(".toggle");


var mode = 0;

function changeMode() {
  if (mode === 0){
    mode = 1;
    toggle.textContent = "night mode";
  } else{
    mode = 0;
    toggle.textContent = "day mode";
  }

  longshan.classList.toggle("night");
  park.classList.toggle("night");
  underground.classList.toggle("night");
  toggle.classList.toggle("night")
}

toggle.addEventListener("click", changeMode);
