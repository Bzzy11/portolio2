/*========SHOW MENU========*/ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*emailjs*/
 const contactForm = document.getElementById('contact-form');
       contactMessage = document.getElementById('contact-message');

 const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID-templateID-#dorm-publickey
    emailjs.sentForm('service_fpskq0q', 'template_xj66uxt', '#contact-form', 'UwG2_CH15bvE0skTN')
       .then(() =>{
            //Show sent message
            contactMessage.textContent = 'Message sent successfully'
    
        },() =>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error)'
    })
}
       

 contactForm.addEventListener('submit', sendEmail)