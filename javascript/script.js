let form = document.querySelector('form');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let submitBtn = document.querySelector('button')

let errMsg = document.querySelectorAll('.errMsg');
console.log(errMsg);



form.addEventListener('submit', e=>{
  e.preventDefault();

  let fnameValue = fname.value.trim();
  let lnameValue = lname.value.trim();
  
    const nameRegex = /^[a-z ,.'-]+$/i ;

    /*Checking for the validity of inputs */

    /*names*/
    if (!nameRegex.test(fnameValue)){
       fname.classList.add('error');
       fname.nextElementSibling.style.display = "block";
       }else{
       fname.classList.remove('error');
       fname.nextElementSibling.style.display = "none";
    }

    if (!nameRegex.test(lnameValue)){
       lname.classList.add('error');
       lname.nextElementSibling.style.display = "block";
    }else{
       lname.classList.remove('error');
       lname.nextElementSibling.style.display = "none";
    }
   
     /*email*/
     let emailValue = email.value.trim();
        const emailREgex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;     /*password*/
        if(!emailREgex.test(emailValue)){
         console.log("false");
          email.classList.add('error');
          email.nextElementSibling.style.display = "block";
        }
        else{
         console.log("True");
          email.classList.remove("error");
          email.nextElementSibling.style.display = "none";
        }

        // Password regex
         const passwordRegex = /^(?=.{8,})$/;

         // Check if password matches the regex
         let passValue = password.value;
         if (passwordRegex.test(passValue)) {
           password.classList.remove("error");
           password.nextElementSibling.style.display = "none";
         } else {
            password.classList.add("error");
            password.nextElementSibling.style.display = "block";
         }
})
    
     
