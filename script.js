// Smooth scrolling function
function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Portfolio filter function
  function filterSelection(category) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
      item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
    });
  }
  
  // Contact form submission
  function handleSubmit(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
  }
  