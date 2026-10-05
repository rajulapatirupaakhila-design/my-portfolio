
// Portfolio loaded successfully
console.log("Welcome to Rupa Akhila's Portfolio!");


// Add a small effect when the page is scrolled

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 15px rgba(0, 0, 0, 0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 10px rgba(0, 0, 0, 0.08)";

    }

});

