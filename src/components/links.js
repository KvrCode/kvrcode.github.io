import jump from 'jump.js'

function linkEventHandler() {
    const location = '#' + this.dataset.link;

    jump(location, {
        duration: 1000,
        offset: -75,
        callback: undefined,
        easing: undefined,
        a11y: false
    })
}

export function linkEventListener() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', linkEventHandler);
    })
}