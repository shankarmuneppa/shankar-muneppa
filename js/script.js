// Mobile Navigation

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu after clicking navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks")
        .classList.remove("active");
    });
});

// Contact Form

document.getElementById("contactForm")
   .addEventListener("submit", function(event){
    event.preventDefault();
    
    alert("Thank you! Your message has been submitted.");
    this.requestFullscreen();

   });