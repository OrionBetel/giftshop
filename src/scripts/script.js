Array.prototype.forEach.call(document.querySelectorAll('.nav-main__item'), 
  function(item) {
    item.addEventListener('mouseenter', function() {
      var dropdown = item.querySelector('.dropdown');
      var link = item.querySelector('.nav-main__link');
      
      dropdown.classList.remove('dropdown_hidden');
      link.classList.add('nav-main__link_hovered');
      
      dropdown.addEventListener('mouseleave', function() {
        dropdown.classList.add('dropdown_hidden');
        link.classList.remove('nav-main__link_hovered'); 
      });

      item.addEventListener('mouseleave', function(event) {
        if (event.relatedTarget && 
          event.relatedTarget.classList.contains('nav-main__link') ||
          !event.target.previousElemenSibling ||
          !event.target.nextElementSibling) {
            dropdown.classList.add('dropdown_hidden');
            link.classList.remove('nav-main__link_hovered');
        }
      });
  });
});