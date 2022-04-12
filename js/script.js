// custom right click 
// feather icon 
feather.replace()

// animation 
window.addEventListener('contextmenu', (event) => {
    event. preventDefault()
    var contextMenu = document.getElementById('context-menu')
    contextMenu.classList.add('active')
})

window.addEventListener('click', () => {
    document.getElementById('context-menu').classList.remove('active')

})

// on right click 
const contextMenu = document.querySelector(".container"),
shareMenu = contextMenu.querySelector(".menu-sub-list");

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;

    if(x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");

// full screen mode 
function FullScreenMode() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
}

// copy function 
function Copy(text) {
  var inputc = document.body.appendChild(document.createElement("input"));
  inputc.value = window.location.href;
  inputc.focus();
  inputc.select();
  document.execCommand('copy');
  inputc.parentNode.removeChild(inputc);
  alert("URL Copied.");
}

// sidemenu
const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle"),
  modetoggle = body.querySelector(".dark-light"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
})


// clicking outside 
const sidebarrr = document.getElementById('sidebar');
const containerr = document.getElementById('container');

containerr.onclick = function (e) {
if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
  sidebarrr.classList.add('close');
}
}


// dark light mode 
const chk = document.getElementById('chk');

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');

  if (!body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
    // js code to keep user selected mode even page refresh or file reopen
    localStorage.setItem("mode", "light-mode");
  } else {
    modeText.innerText = "Dark mode";
    // js code to keep user selected mode even page refresh or file reopen
    localStorage.setItem("mode", "dark-mode");

  }
});

// when click on search, dropdown apperar
window.onload = function () {
  var SearchResult = document.getElementById("ResultBox");
  document.onclick = function (event) {
    if (event.target.id !== "ResultBox") {
      SearchResult.style.display = "block";
    }
    if (event.target.id !== "SearchInput") {
      SearchResult.style.display = "none";
    }
  }
};

// filter
const search = () => {
  let filter = document.getElementById('SearchInput').value.toUpperCase();
  let ul = document.getElementById('ResultBox');
  let li = ul.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    let textValue = a.textContent || a.innerHTML;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

// google search 
let query = document.querySelector('.query');
let searchBtnn = document.querySelector('.searchBtn');

searchBtnn.onclick = function () {
  let url = 'https://www.google.com/search?q=' + query.value;
  // window.open(url, '_self');
  window.open(url);
}

// color changer 
// document.querySelector('.switcher-btn').onclick = () => {
//   document.querySelector('.color-switcher').classList.toggle('active');
// };

// let themeButtons = document.querySelectorAll('.theme-buttons');
// themeButtons.forEach(color => {
//   color.addEventListener('click', () => {
//     let dataColor = color.getAttribute('data-color');
//     document.querySelector(':root').style.setProperty('--hue-color', dataColor);
//   });
// });

// download toast notification 
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
function toast() {
  toastr["success"]("Your download has been started", "Download")
}