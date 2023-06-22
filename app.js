const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function validateForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var message = document.forms[0]["message"].value;
    if (name == "" || email == "" || message == "") {
      alert("All fields must be filled out");
      return false;
    }
    return true;
  }

  let count =1;
  document.getElementById("radio1").checked = true;
  
  setInterval( function(){
      nextImage();
  }, 4000)
  
  function nextImage(){
      count++;
      if(count>7){
          count =1;
      }
  
      document.getElementById("radio"+count).checked = true;
  }