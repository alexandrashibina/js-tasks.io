const computedStyle = window.getComputedStyle(items);
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step //container width - size of the element
const maxRight = (items.legnth - preShownItems) * step;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = `${currentRight}`;
    }
})

left.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentRight < minRight) {
        currentRight -= step;
        items.style.right = `${currentRight}`;
    }

})