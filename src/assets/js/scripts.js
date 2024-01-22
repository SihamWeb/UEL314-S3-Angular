console.log('Script loaded');
document.addEventListener('DOMContentLoaded', () => {

console.log('HELLO');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(function (element) {
      const speed = element.getAttribute('data-speed');
      element.style.backgroundPositionY = -scrollPosition * speed + 'px';
    });
  });
});

