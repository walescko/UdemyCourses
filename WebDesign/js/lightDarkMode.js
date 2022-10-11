<<<<<<< HEAD
function lightMode() {
    let element = document.body;
    element.classList.toggle("lightDark-mode");
}
=======
function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}

function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

>>>>>>> cf77588cba98039bd646366a678bb95df91a60ce
