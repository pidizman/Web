//nav
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//theme
var icon = document.getElementById('icon')
icon.onclick = function() {
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    icon.style.color = "black";
  }else{
    icon.style.color = "white";
  }
}