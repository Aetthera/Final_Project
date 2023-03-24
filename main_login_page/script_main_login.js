const wrapper = document.querySelector ('.wrapper');
const btn = document.querySelector ('.btnlogin');
const iconClose = document.querySelector ('.icon-close');

//btn login and close events 
btn.addEventListener('click', ()=> {wrapper.classList.add('active');});
iconClose.addEventListener('click', ()=> {wrapper.classList.remove ('active');});


//user validation
function validateForm() {

    //username validation
    let name = document.forms["login-form"]["username"].value;
    if (name == "") {
      alert("Name must be filled in");
      return false;
    }

    //password validation
    let pass = document.forms["login-form"]["pwd"].value;
    if (pass.length < 5) {
      alert("Password must be filled out and contain minimum of 6 characters");
      return false;
    }
  }  

  