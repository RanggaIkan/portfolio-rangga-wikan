document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality for the contact form
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('showContactFormBtn');
    const span = document.getElementsByClassName('close-button')[0];
        
    // When the button is clicked, display the modal
    btn.onclick = function() {
        modal.style.display = 'block';
    }
    
    // When the 'x' button is clicked, hide the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    // When the user clicks anywhere outside the modal, hide it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}); 