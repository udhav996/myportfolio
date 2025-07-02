



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const part1 = "Hello, I'm ";
const part2 = '<span class="highlight-name">Udhav Salunke </span>';
const part3 = '<img src="cartoon_face2.png" class="emoji-avatar" alt="Cartoon Face">';
let charIndex = 0;

function typePart1() {
  if (charIndex < part1.length) {
    typedTextSpan.textContent += part1.charAt(charIndex);
    charIndex++;
    setTimeout(typePart1, 80); // ⏱️ Adjust speed
  } else {
    charIndex = 0;
    setTimeout(typePart2, 100); // ⏱️ Delay before typing part2
  }
}

function typePart2() {
  if (charIndex <= part2.length) {
    typedTextSpan.innerHTML = part1 + part2.slice(0, charIndex);
    charIndex++;
    setTimeout(typePart2, 60); // ⏱️ Adjust speed
  } else {
    charIndex = 0;
    setTimeout(typePart3, 50); // ⏱️ Delay before showing image
  }
}

function typePart3() {
  typedTextSpan.innerHTML = part1 + part2 + part3;
  cursorSpan.style.display = "none"; // remove cursor
}

window.addEventListener("DOMContentLoaded", typePart1);





document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetHref = this.getAttribute('href');

        // Check if the href starts with '#', meaning it's an internal section link
        if (targetHref.startsWith('#')) {
            e.preventDefault(); // Prevent default only for section scrolling

            const targetId = targetHref.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        }
        // Else, let the browser navigate normally for .html pages
    });
}); 



particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { speed: 1, direction: "none", out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});




  
 