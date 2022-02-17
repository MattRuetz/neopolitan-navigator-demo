const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];


const navAnimation = (direction1, direction2) => {
    navItems.forEach((nav, navIndex) => {
        nav.classList.replace(`slide-${direction1}-${navIndex+1}`, `slide-${direction2}-${navIndex+1}`)
    });
}

const toggleNav = () => {
    menuBars.classList.toggle('change');
    //toggle menu active/not
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate IN - nav overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate IN - nav items
        navAnimation('out', 'in');
    }
    else {
        // Animate OUT - nav overlay
        overlay.classList.add('overlay-slide-left');
        overlay.classList.remove('overlay-slide-right');
        // Animate OUT - nav items
        navAnimation('in', 'out');
    }
}

menuBars.addEventListener('click', toggleNav);

navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
})
