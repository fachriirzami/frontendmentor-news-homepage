// Refresh to top of the page
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} 
else {
  window.onbeforeunload = () => {
  window.scrollTo(0, 0);
  }
}

// Switch Mode Button
let switchMode = document.getElementById("switch-mode")
let switchText = document.querySelectorAll(".switch-text")

function darkMode() {
  document.body.style.transition = "all .5s"
  document.body.style.background = "black"

  for (let i = 0; i < switchText.length; i++) {
    switchText[i].style.setProperty("color", "white", "important");
  }

  switchMode.classList.remove("bg-dark", "text-light")
  switchMode.classList.add("bg-light", "text-dark")

  switchMode.innerHTML = "Light Mode"
  switchMode.setAttribute('onclick','lightMode()')
}

function lightMode() {
  document.body.style.transition = "all .5s"
  document.body.style.background = "white"

  for (let i = 0; i < switchText.length; i++) {
    switchText[i].style.setProperty("color", "black", "important");
  }

  switchMode.classList.remove("bg-light", "text-dark")
  switchMode.classList.add("bg-dark", "text-light")
  
  switchMode.innerHTML = "Dark Mode"
  switchMode.setAttribute('onclick','darkMode()')
}

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
