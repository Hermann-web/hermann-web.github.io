const defaultlang_value = 'fr'; // Default language is French



function get_lang_value(){
    // Read the value of the lang parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang'); 
    return langParam === 'en' ? 'en' : 'fr'
}

// If the lang parameter is set to "en", set the textData object to textDataEn
lang_value = get_lang_value()
textData = lang_value === 'en'? textDataEng:textDataFr


  // Get all span elements with classname "special-text-id"
  const specialTextElements = document.querySelectorAll('span.sct');
  // Loop through each span element and fill it with the corresponding value from textDataFr
specialTextElements.forEach(element => {
  const key = element.classList[1]; // Get the "data-key" attribute value of the span element
  if (key && textData[key]) {
    element.innerHTML = textData[key];
  }
});


// handle nav: spread lang value when page change
var navItems = document.querySelectorAll('.nav-item');

navItems.forEach(function(navItem) {
  var link = navItem.querySelector('a');

  navItem.addEventListener('click', function(event) {
    event.preventDefault();
    var langValue = get_lang_value()// get the current value of the lang parameter
    var href = link.getAttribute('href');
    //link.setAttribute('href', href + '?lang=' + langValue);
    window.location.href = href + '?lang=' + langValue;
  });
});