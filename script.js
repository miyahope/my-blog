/* help from copilot since I couldn't get the dropdown working */

function toggleNav() {
  var nav = document.getElementById("myTopnav");
  var dropdown = document.getElementById("dropdownMenu");
  if (nav.className === "topnav") {
    nav.className += " responsive";
    dropdown.style.display = "block";
  } else {
    nav.className = "topnav";
    dropdown.style.display = "none";
  }
}

window.addEventListener('click', function(event) {
  const nav = document.getElementById('myTopnav');
  const dropdown = document.getElementById('dropdownMenu');
  const icon = event.target.closest('.icon');
  const insideDropdown = event.target.closest('.dropdown-content');
  if (!icon && !insideDropdown && nav.className.indexOf('responsive') > -1) {
    nav.className = "topnav";
    dropdown.style.display = "none";
  }
});
