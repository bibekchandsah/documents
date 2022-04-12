var preloader = document.getElementById('loading');
function myFunction(){
    preloader.style.display = 'none';
}

/*==================== auto logout after 1min ====================*/
setTimeout(logoutUser, 60000); // 5000=5s
function logoutUser(){
    window.location = "index.html";
}

// // color changer 
document.querySelector('.switcher-btn').onclick = () => {
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