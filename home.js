// ==============================
// ANIMATED ROLE TEXT
// ==============================

const roles = [
    "Web Developer",
    "UI/UX Enthusiast",
    "AI/ML Enthusiast"
];

const roleElement = document.getElementById("role");

let roleIndex = 0;


// Change role every 2.5 seconds

function changeRole() {

    roleElement.style.opacity = "0";

    setTimeout(() => {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        roleElement.textContent =
            roles[roleIndex];

        roleElement.style.opacity = "1";

    }, 300);
}


setInterval(changeRole, 2500);