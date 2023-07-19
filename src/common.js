document.addEventListener('DOMContentLoaded', function() {
    // Fetch the header.html and insert it into the 'header' element on each page
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('header').innerHTML = data;
      });
  
    // Fetch the footer.html and insert it into the 'footer' element on each page
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('footer').innerHTML = data;
      });
  });
  