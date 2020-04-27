(() => {
    const button = document.querySelector(".js-button");
    const button2 = document.querySelector(".js-button2");
    const menu = document.querySelector(".js-main-navigation__list");

    const toggleClass = () => {
        menu.classList.toggle("main-navigation__list--open");
    };

    button.addEventListener("click", toggleClass);
    button2.addEventListener("click", toggleClass);

})();