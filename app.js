import { handleMenuClick, hamburgerMenu } from "./scripts/slideMenu.js"
import { change, holdDotClick, dots } from "./scripts/sliderImages.js"

hamburgerMenu.addEventListener('click',handleMenuClick)

dots.forEach((dot,index)=>{
  dot.addEventListener('click',(e)=>{
    holdDotClick(e,index)
  })
})

window.onload = change()