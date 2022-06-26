const dropdown = document.getElementById('drop')
function noScroll (callback, refresh = 300) {
    if (!callback || typeof callback !== 'function') return;
    let isScrolling;
    window.addEventListener('scroll', function (event) {
        dropdown.className = 'hidden'
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(callback, refresh);
    }, false);
  }
  
  noScroll(function () {
    // Scroll parado
    dropdown.className = 'dropdown'
  });