document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        const icon = this.querySelector('.icon-circle i');
        if (this.getAttribute('aria-expanded') === "true") {
            icon.classList.remove("bi-plus");
            icon.classList.add("bi-dash");
        } else {
            icon.classList.remove("bi-dash");
            icon.classList.add("bi-plus");
        }
    });
});

