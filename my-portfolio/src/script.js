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
            this.reset();
        });
    }

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
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => <span>${tech}</span>).join('')}
                </div>
            `;
            projectGrid.appendChild(projectElement);
        });
    }
});
