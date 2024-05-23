const menu = document.querySelectorAll(".menu");
const dropDown = document.querySelectorAll(".dropdown-button");
const dropdownList = document.querySelectorAll(".dropdown,.hidden");
for (let i = 0; i < dropDown.length; i++){
    dropDown[i].addEventListener("mouseover", () => {
        dropdownList[i].className = "dropdown visible";
    });
}
for (let i = 0; i < dropDown.length; i++){
    menu[i].addEventListener("mouseleave", () => {
        dropdownList[i].className = "dropdown hidden";
    });
}
