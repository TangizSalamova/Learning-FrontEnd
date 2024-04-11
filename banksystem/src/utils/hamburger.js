export const hamburgerFuc = () => {
    const hamburgerButton = document.querySelector('.burger');
    hamburgerButton.addEventListener('click', () => {
        const ul = document.querySelector("ul");
        ul.classList.toggle("hamburger-open");
    })
}