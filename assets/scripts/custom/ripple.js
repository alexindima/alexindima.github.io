const rippledElements = document.querySelectorAll(".ripple-effect");

rippledElements.forEach((element) => {
    element.addEventListener("click", (event) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ripple = document.createElement("span");
        ripple.classList.add("ripple-effect--span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        element.appendChild(ripple);

        const removeRipple = (e) => {
            if (e.target === ripple) {
                ripple.removeEventListener("animationend", removeRipple);
                ripple.remove();
            }
        };
        ripple.addEventListener("animationend", removeRipple);
    });
});
