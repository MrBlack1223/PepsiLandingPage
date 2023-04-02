const hamburgerMenu = document.getElementById('hamburger')
const sideMenu = document.getElementById('side')
const mainSection = document.querySelector('main')
const fotterSection = document.querySelector('footer')

const setParams = (w)=>{
    let p 
    if(w>1023) p = [5,95,13,87,8,100,0]
    if(w<=1023) p = [10,90,18,82,20,100,0]
    if(w<=767) p = [0,0,0,0,100,15,15]
    if(w<=479) p = [0,0,0,0,100,55,15]
    return p
}

const handleMenuClick = ()=>{
    const w = window.innerWidth
    const param = setParams(w)
    hamburgerMenu.classList.toggle('activeMenu')
    hamburgerMenu.classList.toggle('hamburgerMenu')
    if(hamburgerMenu.classList.contains('activeMenu')){
      sideMenu.style.width = `${param[4]}vw`
      sideMenu.style.height = `${param[5]}vw`
      mainSection.style.width = `${param[3]}vw`
      mainSection.style.marginLeft = `${param[2]}vw`
      fotterSection.style.marginLeft = `${param[2]}vw`
      fotterSection.style.width = `${param[3]}vw`
    }else if(hamburgerMenu.classList.contains('hamburgerMenu')){
      sideMenu.style.width = '0'
      sideMenu.style.height = '0'
      mainSection.style.width = `${param[1]}vw`
      mainSection.style.marginLeft = `${param[0]}vw`
      mainSection.style.marginTop = `0vw`
      fotterSection.style.marginLeft = `${param[0]}vw`
      fotterSection.style.width = `${param[1]}vw`
    }
}  
export {handleMenuClick, hamburgerMenu}
