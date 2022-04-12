// username and password validation 
// function validate() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   if (username == "bibek" && password == "sah") {
//     alert("Access Granted Succesfully");
//     window.open("cover.html");
//     return false;
//   } else {
//     alert("Access Denied");
//     window.open("verify.html");
//     return false;
//   }
// }

/*==================== auto logout after 1min ====================*/
setTimeout(logoutUser, 60000); // 5000=5s
function logoutUser(){
    window.location = "index.html";
}

/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
  signIn = document.getElementById('sign-in'),
  loginIn = document.getElementById('login-in'),
  loginUp = document.getElementById('login-up')


signUp.addEventListener('click', () => {
  // Remove classes first if they exist
  loginIn.classList.remove('block')
  loginUp.classList.remove('none')

  // Add classes
  loginIn.classList.toggle('none')
  loginUp.classList.toggle('block')
})

signIn.addEventListener('click', () => {
  // Remove classes first if they exist
  loginIn.classList.remove('none')
  loginUp.classList.remove('block')

  // Add classes
  loginIn.classList.toggle('block')
  loginUp.classList.toggle('none')
})

// show hide password in sign in
const passInput = document.querySelector('[data-pwd-input]')
const toggleBtn = document.querySelector('[data-pwd-toggle]')

let showPassword = false

passInput.addEventListener('input', showToggleButton)
passInput.addEventListener('focus', () => {
  if (showPassword && passInput.value.length < 1) togglePasswordVisible()
})

toggleBtn.addEventListener('click', () => {
  togglePasswordVisible()
  passInput.focus()
})

function showToggleButton() {
  if (passInput.value.length > 0) toggleBtn.style.display = 'block'
  else toggleBtn.style.display = ''
}

function togglePasswordVisible() {
  showPassword = !showPassword
  if (showPassword) {
    toggleBtn.classList = 'fas fa-eye-slash'
    passInput.setAttribute('type', 'text')
  } else {
    toggleBtn.classList = 'fas fa-eye'
    passInput.setAttribute('type', 'password')
  }
}

// show hide password in sign up
const passsInput = document.querySelector('[data-pwwd-input]')
const togggleBtn = document.querySelector('[data-pwwd-toggle]')

let showPasssword = false

passsInput.addEventListener('input', showTogggleButton)
passsInput.addEventListener('focus', () => {
  if (showPasssword && passsInput.value.length < 1) toggglePasswordVisible()
})

togggleBtn.addEventListener('click', () => {
  toggglePasswordVisible()
  passsInput.focus()
})

function showTogggleButton() {
  if (passsInput.value.length > 0) togggleBtn.style.display = 'block'
  else togggleBtn.style.display = ''
}

function toggglePasswordVisible() {
  showPasssword = !showPasssword
  if (showPasssword) {
    togggleBtn.classList = 'fas fa-eye-slash'
    passsInput.setAttribute('type', 'text')
  } else {
    togggleBtn.classList = 'fas fa-eye'
    passsInput.setAttribute('type', 'password')
  }
}

// color changer 

document.querySelector('.change-color').onclick = () => {
// document.querySelector('.switcher-btn').onclick = () => {
  document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color => {
  color.addEventListener('click', () => {
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--hue-color', dataColor);
  });
});



/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// clicking outside 
const sidebarr = document.getElementById('color-switcher');
const close_container = document.getElementById('home');

close_container.onclick = function (e) {
if (e.target.id !== 'color-switcher' && e.target.id !== 'switcher-btn') {
  sidebarr.classList.remove('active');
}
}