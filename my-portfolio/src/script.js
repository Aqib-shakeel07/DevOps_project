<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! (This is a demo - no data is actually sent)');
=======
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
>>>>>>> aac80bc6f769f0bf7140dd22af84097674455b0f
            this.reset();
        });
    }

<<<<<<< HEAD
    // Sample projects - you would replace with your actual projects
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            technologies: ["React", "Node.js"]
        }
    ];

    // Render projects
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
=======
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
>>>>>>> aac80bc6f769f0bf7140dd22af84097674455b0f
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
<<<<<<< HEAD
                    ${project.technologies.map(tech => <span>${tech}</span>).join('')}
                </div>
=======
                    ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                </div>
                <a href="#">View Project</a>
>>>>>>> aac80bc6f769f0bf7140dd22af84097674455b0f
            `;
            projectGrid.appendChild(projectElement);
        });
    }
});
