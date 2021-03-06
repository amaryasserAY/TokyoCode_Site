// =================================Form Validation===============================//

  const form = document.getElementById('form');
  const firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');







form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});
    


  function checkInputs() {
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue = lastname.value.trim();
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if (firstnamevalue === '') {
      
      setErrorFor(firstname, 'FirstName Cannot be blank');

    } else {
      setSuccesFor(firstname);
    }

    if (lastnamevalue === '') {
      
      setErrorFor(lastname, 'LastName Cannot be blank');

    } else {
      setSuccesFor(lastname);
    }

    if (usernamevalue === '') {
      
      setErrorFor(username, 'UserName Cannot be blank');

    } else {
      setSuccesFor(username);
    }



    if (emailvalue === '') {
      setErrorFor(email, 'Email Cannot be blank');
      
    } else if (!isEmail(emailvalue)) {

      setErrorFor(email, 'Email Is Not valid');
      
    } else {
      setSuccesFor(email);
    }



    if (passwordvalue === '') {
      
      setErrorFor(password, 'password Cannot be blank');

    } else if (passwordvalue === firstnamevalue) {

      setErrorFor(password, `Cann't used ${firstnamevalue} Becouse used in First Name`);
    }
    else if (passwordvalue === lastnamevalue) {
          
      setErrorFor(password, `Cann't used ${lastnamevalue} Becouse used in Last Name`);
    }
    else if (passwordvalue === usernamevalue) {
          
      setErrorFor(password, `Cann't used ${usernamevalue} Becouse used in User Name`);
    }
    else if (passwordvalue === emailvalue) {
          
      setErrorFor(password, `Cann't used Email  in set Password`);
    }
          
  
          
    else {
      setSuccesFor(password);
    }


    if (password2value === '') {
      
      setErrorFor(password2, 'password Cannot be blank');

    } else if (passwordvalue !== password2value) {
          
      setErrorFor(password2, 'Password not same rePassword');

    } else {
      setSuccesFor(password2);
    }


  }


  function setErrorFor(input, message) {
    const formrows = input.parentElement;
    const small = formrows.querySelector('small');
    small.textContent = message;
    formrows.className = 'parent error ';

  }

  function setSuccesFor(input) {
    const formrows = input.parentElement;
    formrows.className = 'parent success ';
  }


  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
  // ================================= End Form Validation===============================//
