
//  SECTION: On scroll change main nav height
window.addEventListener("scroll", function () {
    let nav = document.getElementById("nav");
    nav.classList.toggle("down", window.scrollY > 0);
});


// SECTION: PHONE SIZE MENU
///EVENT LISTENERS
window.addEventListener("resize", function () {
    if (window.innerWidth > 1080) {
        closeMenu();
    }
});
///FUNCTIONS
const toggleMenu = () => {
    let navActive = document.querySelector(".navigation.active");
    if (navActive) {
        closeMenu();
    } else {
        openMenu();
    }

}
const openMenu = () => {
    let html = document.querySelector("html");
    let linkList = document.querySelector(".navigation");
    
    html.classList.add("noOverflow");
    linkList.classList.add("active");
    console.log("Test");
}
const closeMenu = () => {
    let html = document.querySelector("html");
    let linkList = document.querySelector(".navigation");

    html.classList.remove("noOverflow");
    linkList.classList.remove("active");
}




// //Section: ON SCROLL CHANGE NAV LINKS AS ACTIVE
// ///VARIABLES
// let section = document.querySelectorAll("section, body > header");
// let navLinks = document.querySelectorAll(".navigation a");
// ///EVENT LISTENERS
// window.onscroll = () => {
//     section.forEach((sec) => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 90;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach((links) => {
//                 links.classList.remove("active");
//                 document
//                     .querySelector(".navigation a[href*=" + id + "]")
//                     .classList.add("active");
//             });
//         } else if (id === "home" && top < + height) {
//             navLinks.forEach((links) => {
//                 links.classList.remove("active");
//                 document
//                     .querySelector(".navigation a[href*=" + id + "]")
//                     .classList.add("active");
//             });
//         }
//     });
// };