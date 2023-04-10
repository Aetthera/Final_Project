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
    if (name == "" ) {
      alert("Name must be filled in");
      return false;
    }
    

    //password validation
    let pass = document.forms["login-form"]["pwd"].value;
    if (pass == "" ) {
      alert("Password must be filled in");
      return false;
    }
    if (pass != "passAdmin01#" || name != "user1"){
      alert("Wrong username or rassword");
      return false;
    }
  }  

