const phoneImages = ["images/midnight.png", "images/red.png", "images/starlight.png"]

let phoneCont = document.getElementById("phoneShow")
let midnight = document.getElementById("midnight")
let red = document.getElementById("red")
let starlight = document.getElementById("starlight")

let defaultImgItems = `<img src= "${phoneImages.at(0)}">`
let redImgItems = `<img src= "${phoneImages.at(1)}">`
let starlightImgItems = `<img src= "${phoneImages.at(2)}">`

phoneCont.innerHTML = defaultImgItems

midnight.addEventListener("click", function(){
  phoneCont.innerHTML = defaultImgItems
})

red.addEventListener("click", function(){
  phoneCont.innerHTML = redImgItems
})

starlight.addEventListener("click", function(){
  phoneCont.innerHTML = starlightImgItems
})