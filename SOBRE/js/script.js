const btnoff = document.getElementById("lampadaoff")
const btnon = document.getElementById("lampadaon")

btnoff.style.display = "none"
function darkMode(){
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnon.style.display = "none"
    btnoff.style.display = "flex"
    btnoff.addEventListener("click", lightMode)
    element.className = "dark-mode";
    content.innerText = "Dark Mode is OFF"
}

function lightMode(){
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnoff.style.display = "none"
    btnon.style.display = "flex"
    element.className = "light-mode";
    content.innerText = "Dark Mode is ON"
}