// Highlight the link when hovered and log which link was clicked

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('main ul li a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#e0e0e0';
        });
        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '';
        });
        link.addEventListener('click', () => {
            console.log(`Visited: ${link.href}`);
        });
    });
});