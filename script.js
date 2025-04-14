document.addEventListener('DOMContentLoaded', function() {
  const allSections = document.querySelectorAll('section');
  allSections.forEach(section => {
      if (section.id !== 'home') {
          section.style.display = 'none';
      }
  });

  document.getElementById('home').classList.add('active');

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              navLinks.forEach(link => link.classList.remove('active'));
              this.classList.add('active');

              allSections.forEach(section => {
                  section.classList.remove('active');
                  section.classList.add('transitioning');
              });

              setTimeout(() => {
                  targetSection.classList.add('active');
                  targetSection.style.display = 'flex'; 
                  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  document.querySelectorAll('section.transitioning').forEach(section => section.classList.remove('transitioning'));
              }, 100);
          } else {
              console.error(`Section with ID "${targetId}" not found. Check your HTML.`);
          }
      });
  });
});