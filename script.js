// ================= Typing =================
const text = "وهب فاضل غالب محمد الأزور";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}
typeWriter();

// ================= Mouse Glow =================
const glow = document.createElement("div");
glow.classList.add("mouse-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// ================= Custom Cursor =================
const cursor = document.createElement("div");
cursor.classList.add("cursor-ring");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ================= Reveal =================
const reveals = document.querySelectorAll(".reveal");

function reveal() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// ================= Skill Animation =================
const skills = document.querySelectorAll(".skill-bar div div");

function animateSkills() {
    skills.forEach(skill => {
        const width = skill.getAttribute("style").match(/\d+/)[0];
        skill.style.width = width + "%";
    });
}
window.addEventListener("scroll", animateSkills);

// ================= 3D Tilt Effect =================
document.querySelectorAll(".hover-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

// ================= Ripple Effect =================
document.querySelectorAll(".hover-card").forEach(card => {
    card.classList.add("ripple");

    card.addEventListener("click", function(e) {
        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        circle.style.width = circle.style.height = diameter + "px";
        circle.style.left = e.clientX - this.offsetLeft - diameter / 2 + "px";
        circle.style.top = e.clientY - this.offsetTop - diameter / 2 + "px";
        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});