"use strict"

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('.icon-menu')) {             /*step 2*/
        document.documentElement.classList.toggle('menu-open');     /*создаем класс menu-open*/
    }

    if (targetElement.closest('[data-goto]')) {
        document.documentElement.classList.contains('menu-open') ?              /*при выборе пункта меню закрывается*/
            document.documentElement.classList.remove('menu-open') : null;      /*при выборе пункта меню закрывается*/
        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }
        e.preventDefault();         /*На этом моменте уже работают ссылки меню*/
    }
}