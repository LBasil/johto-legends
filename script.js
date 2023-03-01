document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

const searchInput = document.querySelector('.input');
const tableRows = document.querySelectorAll('tbody tr');

searchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  tableRows.forEach(function(row) {
    const pokemonName = row.querySelector('td:nth-of-type(2)').textContent.toLowerCase();
    const pokemonFirstType = row.querySelector('td:nth-of-type(3)').textContent.toLowerCase();
    const pokemonSecondType = row.querySelector('td:nth-of-type(4)').textContent.toLowerCase();

    if (pokemonName.includes(searchTerm) || pokemonFirstType.includes(searchTerm) || pokemonSecondType.includes(searchTerm) ) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});