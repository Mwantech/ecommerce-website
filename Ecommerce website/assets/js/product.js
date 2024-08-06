document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
      var button = dropdown.querySelector('.dropbtn');
      var content = dropdown.querySelector('.dropdown-content');
      
      button.addEventListener('click', function(event) {
        event.stopPropagation();
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
      });
  
      document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          content.style.display = 'none';
        }
      });
    });
  });
  