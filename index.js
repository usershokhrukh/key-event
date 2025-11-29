const elTitle = document.querySelector(".title");
const elItemsTitle = document.querySelectorAll(".items__title");
const elDocTitle = document.querySelector("title");

window.addEventListener("keydown", (e)=>{
  if(e.code.toString() == "Backspace") {
    elTitle.textContent = "[backspace]";
  }else if(e.code.toString() == "Space") {
    elTitle.textContent = "[space]";
  }else {
    elTitle.textContent = e.which;
  }

  if(e.key == " "){
    elItemsTitle[0].textContent = "[space]";
  }else {
    elItemsTitle[0].textContent = e.key;
  }
  elItemsTitle[1].textContent = e.code;
  elItemsTitle[2].textContent = e.ctrlKey;
  elDocTitle.text = e.key;
  // elTitle.textContent = e.which;
});

window.addEventListener("keypress", (e) => {
  elItemsTitle[2].textContent = e.ctrlKey;
  
});
