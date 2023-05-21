 
console.log("HOLa");
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.pageYOffset > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});




