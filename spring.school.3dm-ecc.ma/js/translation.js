let lang = 'fr'; // Default language is French

// Read the value of the lang parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');

// If the lang parameter is set to "en", set the textData object to textDataEn
if (langParam === 'en') {
  textData = textDataEn;
  lang = 'en';
} else {
  textData = textDataFr;
}

  // Get all span elements with classname "special-text-id"
  const specialTextElements = document.querySelectorAll('span.sct');
  // Loop through each span element and fill it with the corresponding value from textDataFr
specialTextElements.forEach(element => {
  const key = element.classList[1]; // Get the "data-key" attribute value of the span element
  if (key && textData[key]) {
    element.innerHTML = textData[key];
  }
});