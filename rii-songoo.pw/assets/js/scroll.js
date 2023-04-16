// Get the button:
let mybutton = document.getElementById("myBtn");
const M1 = true;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



const scroll_to_target_id = (id)=>{
    //create a tag a with that 
    a_link2 = document.createElement("a")
    a_link2.href = "#"+id
    a_link2.style.display = "None"
    document.getElementById(id).appendChild(a_link2)

    // click on it
    a_link2.click()
    //remove the tag
    a_link2.remove()
    window.location.href = ""
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  if(M1){scroll_to_target_id('myTop');return}
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}