document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! (This is a demo — no data is actually sent.)');
            this.reset();
        });
    }

    // Sample project data (replace with real ones later)
    const projects = [
        {
            title: "Portfolio Website",
            description: "A responsive personal portfolio website.",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Secure Login System",
            description: "A login system with password hashing and CSRF protection.",
            technologies: ["Node.js", "Express", "MongoDB"]
        }
    ];

    // Render projects dynamically (optional if you're already hardcoding them)
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        // Clear any existing content first (if needed)
        projectGrid.innerHTML = "";

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card';
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                </div>
                <a href="#">View Project</a>
            `;
            projectGrid.appendChild(projectElement);
        });
    }
});
