const path = "/users/download/index.html"

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    return pathExt == requiredExt
}

console.log(isHtml(path));

// const isHtml = path => {
//     const requiredExt = ".html";
//     const pathExt = path.slice(-5);

//     if (pathExt == requiredExt) {
//         return true
//     }   else {
//         return false
//     }
// }

// console.log(isHtml(path));