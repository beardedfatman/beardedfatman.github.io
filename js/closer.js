var elements = document.getElementsByClassName("navigation__link");
var navToggle = document.getElementById('navi-toggle')
 
// Now, getElementsByClassName returns a NodeList.  NodeLists, while array-like,
// are not arrays so in order to use the forEach method, we need to 'convert' the
// Nodelist to a true array like so....
Array.prototype.slice.call(elements)
  .forEach(function (el) {
      el.addEventListener('click', function (e) {
          navToggle.checked = false
      })
  })