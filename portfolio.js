// Hover effect to dynamically change colors
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseover", () => {
        document.body.style.backgroundColor = card.style.getPropertyValue("--clr");
    });
    card.addEventListener("mouseleave", () => {
        document.body.style.backgroundColor = "#f4f4f4";
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// cursor
//const cursor = document.querySelector('.custom-cursor');

//document.addEventListener('mousemove', (e) => {
    //cursor.style.left = `${e.clientX}px`;
   // cursor.style.top = `${e.clientY}px`;
//});

