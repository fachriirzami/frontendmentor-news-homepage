// Change Menu Button
let btnCol = document.getElementById("collapse-button")
let iconCol = document.getElementById("icon-collapse")

function changeToClose() {
  iconCol.src = "./assets/images/icon-menu-close.png"
  iconCol.alt = "close-button"
  btnCol.setAttribute('onclick','changeToMenu()')
}

function changeToMenu() {
  iconCol.src = "./assets/images/icon-menu.png"
  iconCol.alt = "collapse-button"
  btnCol.setAttribute('onclick','changeToClose()')
}

// Back To Top Button
let btnTop = document.getElementById("btnTop")

window.onscroll = () => { scrollToShow() }

function scrollToShow() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.animationName = "fadeIn"
    setTimeout( () => { btnTop.style.display = "block" }, 150)
  } 
  else {
    btnTop.style.animationName = "fadeOut"
    setTimeout( () => { btnTop.style.display = "none" }, 140)
  }
}

function backToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
