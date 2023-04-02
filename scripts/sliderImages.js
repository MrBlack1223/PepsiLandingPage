const sliderContainer = document.querySelector('.slider')
const sliderImages = document.querySelectorAll('.sliderBannerContainer img')
const dots = document.querySelectorAll('.dot')

let size = sliderImages[0].width
let id = 0
let counter = 1;
let time = 5000;
sliderContainer.style.transform = `translateX(${-size * counter}px)`

const setActiveDot = (number)=>{
    dots.forEach(dot=>{
      dot.classList.remove('activeDot')
    })
    dots[number].classList.add('activeDot')
}
const holdDotClick = (e,i)=>{
  const w = window.innerWidth
  size = sliderImages[1].clientWidth
  if(w <= 479) size = size * 2
  dots.forEach(dot=>dot.classList.remove('activeDot'))
  e.target.classList.add('activeDot')
  sliderContainer.style.transform = `translateX(${-size * (i + 1) }px)`
  sliderContainer.style.transition = 'transform 0.7s ease-in-out'
  clearTimeout(id)
}

const change = ()=>{
  const w = window.innerWidth
  size = sliderImages[1].clientWidth
  if(w <= 479) size = size * 2
  if(counter === 7){
    counter = 1
    setActiveDot(counter - 1)
    sliderContainer.style.transform = `translateX(${-size * 0}px)`
    sliderContainer.style.transition = ""
    time = 5
  }
  else if(counter !== 7){
    setActiveDot(counter - 1)
    sliderContainer.style.transform = `translateX(${-size * counter}px)`
    sliderContainer.style.transition = 'transform 0.4s ease-in-out'
    counter++
    time = 5000
  }
  id = setTimeout(change,time)
}

export {change, dots, holdDotClick}