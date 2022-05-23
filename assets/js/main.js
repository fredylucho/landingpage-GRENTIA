/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('c-show-menu')
        })
    }
}
showMenu('i-container-toggle','i-container-menu')

/*==================== REMOVE MENU ====================*/
const navLink = document.querySelectorAll('.c-container-link')
function linkAction(){
    const navMenu = document.getElementById('i-container-menu')
    navMenu.classList.remove('c-show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACTIVE LINKS ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.c-nav-menu a[href*=' + sectionId + ']').classList.add('c-active-link')
        }else{
            document.querySelector('.c-nav-menu a[href*=' + sectionId + ']').classList.remove('c-active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)