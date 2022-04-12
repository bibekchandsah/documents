// color changer 
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



// clicking outside 
  // const togglee = document.getElementById('switcher-btn');
  const sidebarr = document.getElementById('color-switcher');
  const container = document.getElementById('home');

container.onclick = function (e) {
  if (e.target.id !== 'color-switcher' && e.target.id !== 'switcher-btn') {
    sidebarr.classList.remove('active');
  }
}


/*==================== auto logout after 1min ====================*/
setTimeout(logoutUser, 60000); // 5000=5s
function logoutUser(){
    window.location = "index.html";
}