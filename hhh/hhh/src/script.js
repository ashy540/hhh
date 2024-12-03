document.addEventListener('scroll', function() {
  const footer = document.querySelector('footer');
  const footerPosition = footer.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;
  if (footerPosition < screenPosition) {
    footer.classList.add('visible');
  }
});


  // JavaScript to scroll to the contact form
  document.getElementById('learnMoreBtn').addEventListener('click', function () {
    const contactFormSection = document.getElementById('contactFormSection');
    contactFormSection.scrollIntoView({ behavior: 'smooth' });
  });


  document.getElementById('getstarted').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });


