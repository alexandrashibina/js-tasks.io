const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const items = document.querySelectorAll(".item");
const computedStyles = window.getComputedStyle(itemsList);

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step; //container width - size of the element
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
})

left.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    }

})

// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");
// const computed = window.getComputedStyle(items);

// right.addEventListener("click", function(e) {
//     e.preventDefault();
//     let currentRight = parseInt(computed.right);

//     if (currentRight < 500) {
//         items.style.right = currentRight + 100 + "px";
//     }
// })

// left.addEventListener("click", function(e) {
//     e.preventDefault();
//     let currentRight = parseInt(computed.right);

//     if (currentRight > 0) {
//         items.style.right = currentRight - 100 + "px";
//     }

// })