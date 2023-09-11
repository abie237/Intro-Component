let form = document.querySelector('form');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let submitBtn = document.querySelector('button')

let errMsg = document.querySelector('.errMsg');
console.log(errMsg);

function check_regex(text, input_field) {
    const regex = /^[a-z ,.'-]+$/i;
    if (!regex.test(text)) {
      input_field.classList.add("error");
      errMsg.style.display = "block";
      return false;
    } else {
      input_field.classList.remove("error");
      errMsg.style.display = "none";
      return true;
    }
  }

form.addEventListener('submit', e=>{
    e.preventDefault();
    let fnameValue = fname.value.trim();
    let lnameValue = lname.value.trim();
    let emailValue = email.value.trim();
    /*-----------------------------------------*/
    check_regex(fnameValue,fname);
    check_regex(lnameValue,lname);

})


    
  