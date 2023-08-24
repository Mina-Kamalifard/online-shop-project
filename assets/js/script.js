let loaderElem = document.querySelector('.loader')
window.addEventListener('load', function(){
  loaderElem.classList.add('hidden')
})
// **************************************************************************
let navaElem = document.getElementById('firstChild')
navaElem.style.color = '#9c9c9c '

// **************************************************************************
window.onload = function() {
  let menuBtn = document.querySelector('.hamburger');
  let mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click' , function(){
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active')
})
}

// **************************************************************************
let headerArea = document.querySelector('.header-area')
window.addEventListener('scroll' ,function() {
  if(window.pageYOffset > 50){
  headerArea.classList.add('header-sticky')
}else{
  headerArea.classList.remove('header-sticky')
}
}
)
// ******************************************************************************

let userNameInput = document.querySelector('.username')
let emailInput = document.querySelector('.email')
let passwordInput = document.querySelector('.password')
let loginModal = document.querySelector('.login-modal')
let usernameMassege = document.querySelector('.username-validation')
let emailMassege = document.querySelector('.email-validation')
let passwordMassege = document.querySelector('.password-validation')
let xMark = document.querySelector('.xmark')
let signupModal = document.querySelector('.signup-modal')
let mainElem =document.querySelector('main')
let headerElem = document.querySelector('header')
let togglePassword = document.querySelector('#toggle-password')
let passwordField = document.querySelector('.password')
let userNameValue = userNameInput.value
let emailValue = emailInput.value
let passwordValue = passwordInput.value
let signupBtn = document.querySelector('.signup-a')
let signupBtnMob = document.querySelector('.signup-a-mob')
let mobileNav = document.querySelector('.mobile-nav')


  signupBtn.addEventListener('click' , function(){
    signupModal.style.display='block'
    mainElem.style.filter = 'blur(5px)'
    headerElem.style.filter = 'blur(5px)'
});

signupBtnMob.addEventListener('click' , function(){
  signupModal.style.display='block'
  mainElem.style.filter = 'blur(5px)'
  headerElem.style.filter = 'blur(5px)'
});

function dataValidation(){
if (passwordInput.value.length <10 || userNameInput.value.length <3 || !emailRegEx.test(emailInput.value)){
  loginModal.style.background='#f6a692'
  loginModal.innerHTML='Please Fill the Blank Currently'
  loginModal.style.display = 'inline'
}else{
  loginModal.style.background='#9ff588'
  loginModal.innerHTML=userNameInput.value +' Welcome to Online Shop'
  loginModal.style.display = 'inline'

  setTimeout(function() {
    signupModal.style.display='none'
    mainElem.style.filter = 'blur(0px)'
    headerElem.style.filter = 'blur(0px)'
  }, 1000);
}

userNameInput.value=''
emailInput.value=''
passwordInput.value=''
usernameMassege.style.visibility='hidden'
emailMassege.style.visibility='hidden'
passwordMassege.style.visibility='hidden'
setTimeout(function() {
  loginModal.style.display = 'none'
}, 2500);
}

function usernameValidation(){
  if(userNameInput.value.length<1){
    usernameMassege.style.visibility='hidden'
  }else if(userNameInput.value.length<3){
  usernameMassege.style.color='#d23030'
  usernameMassege.innerHTML='Must Contains 3 Character'
  usernameMassege.style.visibility='visible'
}else{
  usernameMassege.style.color='#4db52b'
  usernameMassege.innerHTML='Corrent Username Value'
}
}

let emailRegEx = /.+@.+mail.com/
function emailValidation(){
  if(emailInput.value.length<1){
    emailMassege.style.visibility='hidden'
  }else if(emailRegEx.test(emailInput.value)){
    emailMassege.style.color='#4db52b'
    emailMassege.innerHTML='Corrent Email'
    emailMassege.style.visibility='visible'
  }else{
    emailMassege.style.color='#d23030'
    emailMassege.innerHTML='Must Enter an Email or Gmail'
    emailMassege.style.visibility='visible'
  }
}

function passwordValidation(){
  if(passwordInput.value.length<1){
    passwordMassege.style.visibility='hidden'
  }else if(passwordInput.value.length<10){
    passwordMassege.style.color='#d23030'
    passwordMassege.innerHTML='Must Contains 10 Character'
    passwordMassege.style.visibility='visible'
  }else{
    passwordMassege.style.color='#4db52b'
    passwordMassege.innerHTML='Corrent password Value'
  }
}

togglePassword.addEventListener('click',function(){
  if(passwordField.type=='text'){
    passwordField.type='password'
    togglePassword.classList.add("fa-eye")
    togglePassword.classList.remove("fa-eye-slash")
  }else{
    passwordField.type='text'
    togglePassword.classList.remove("fa-eye")
    togglePassword.classList.add("fa-eye-slash")
  }
})

xMark.addEventListener('click' , function(){
signupModal.style.display='none'
mainElem.style.filter = 'blur(0px)'
headerElem.style.filter = 'blur(0px)'
userNameInput.value=''
emailInput.value=''
passwordInput.value=''
usernameMassege.style.visibility='hidden'
emailMassege.style.visibility='hidden'
passwordMassege.style.visibility='hidden'
})

signupModal.addEventListener('keydown' ,function (event) {
  let eventKeyCode = event.keyCode
  if(eventKeyCode===13){
    dataValidation()
  }
})


