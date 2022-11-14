// Change Menu Button
let collapse = document.getElementById("collapsed")

function changeToClose() {
  collapse.innerHTML = 
    '<span><img src="./assets/images/icon-menu-close.png" width="32" height="32" alt="close-button"></span>'
  collapse.setAttribute('onclick','changeToMenu()')
}

function changeToMenu() {
  collapse.innerHTML = 
    '<span><img src="./assets/images/icon-menu.png" width="32" height="32" alt="collapsed-button"></span>'
  collapse.setAttribute('onclick','changeToClose()')
}

// Back To Top Button
let btn = document.getElementById("btnTop")

window.onscroll = () => { scrollToShow() }

function scrollToShow() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block"
  } 
  else { btn.style.display = "none" }
}
function backToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
