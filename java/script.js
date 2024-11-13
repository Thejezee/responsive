const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' }); 
  });
});
