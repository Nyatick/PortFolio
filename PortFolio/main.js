const toggleBtn = document.getElementById('js-toggleMenu');

const menu = document.querySelector(".menu");
const ham = document.querySelector(".ham");

const btnClick = () => {
    menu.classList.toggle("active");
    ham.classList.toggle("active");
}

toggleBtn.addEventListener("click", btnClick);