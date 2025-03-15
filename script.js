// JavaScript can be used for interactive features such as form validation or animations
// Currently, we're just adding a basic form submission alert for demonstration

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for demo
    alert('Thank you for reaching out! We will get back to you soon.');
});


// JavaScript for Scroll Animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});
