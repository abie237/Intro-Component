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
        // const emailREgex = \A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z ;     /*password*/
        // if(!test.emailREgex(emailValue)){
        //   email.classList.add('error');
        //   email.nextElementSibling.style.display = "none";
        // }
        // else{
        //   email.classList.remove("error");
        //   email.nextElementSibling.style.display = "none";
        // }

        /*pasword */
        let passValue = password.value;
        console.log(passValue);
        if(passValue.length < 8){
          password.nextElementSibling.display = "block";
        }else{
          password.nextElementSibling.display = "none";
        }

})
    
     
