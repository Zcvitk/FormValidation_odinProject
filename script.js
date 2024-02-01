const validating = (() => {

    const form = document.getElementById('form');
    

    const name = document.getElementById('fullname');
    const nameMsg = document.querySelector('#fullname + span.error-message');

    const email = document.getElementById('email');
    const emailMsg = document.querySelector('#email + span.error-message');

    const adress = document.getElementById('adress');
    const adressMsg = document.querySelector('#adress + span.error-message');

    const city = document.getElementById('city');    
    const cityMsg = document.querySelector('#city + span.error-message');
    
    const zip = document.getElementById('zipcode'); 
    const zipMsg = document.querySelector('#zipcode + span.error-message');

    const state = document.getElementById('state');
    const stateMsg = document.querySelector('#state + span.error-message');

    const phoneNumber = document.getElementById('phoneNumber');
    const phoneNumberMsg = document.querySelector('#phoneNumber + span.error-message');

    const password = document.getElementById('password');
    const passwordMsg = document.querySelector('#password + span.error-message');

    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordMsg = document.querySelector('#confirmPassword + span.error-message');

    name.addEventListener("input", function(ev) {
        if (name.validity.valid && name.value.includes(' ')) {
            nameMsg.textContent = "";
            nameMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    email.addEventListener("input", function(ev) {
        if (email.validity.valid) {
            emailMsg.textContent = "";
            emailMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    adress.addEventListener("input", function(ev) {
        if (adress.validity.valid) {
            adressMsg.textContent = "";
            adressMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    city.addEventListener("input", function(ev) {
        if (city.validity.valid) {
            cityMsg.textContent = "";
            cityMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    zip.addEventListener("input", function(ev) {
        if (zip.validity.valid) {
            zipMsg.textContent = "";
            zipMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    state.addEventListener("input", function(ev) {
        if (state.validity.valid) {
            stateMsg.textContent = "";
            stateMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    phoneNumber.addEventListener("input", function(ev) {
        if (phoneNumber.validity.valid) {
            phoneNumberMsg.textContent = "";
            phoneNumberMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    password.addEventListener("input", function(ev) {
        if (password.validity.valid) {
            passwordMsg.textContent = "";
            passwordMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });

    confirmPassword.addEventListener("input", function(ev) {
        if (confirmPassword.validity.valid) {
            confirmPasswordMsg.textContent = "";
            confirmPasswordMsg.className = "error-message";
        } else {
            errorMsg();
        }
    });


    form.addEventListener("submit", function (ev) {
        if(!name.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!email.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!adress.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!city.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!zip.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!state.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!phoneNumber.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!password.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if(!confirmPassword.validity.valid) {
            errorMsg();
            ev.preventDefault();
        }

        if (
            name.validity.valid &&
            email.validity.valid &&
            adress.validity.valid &&
            city.validity.valid &&
            zip.validity.valid &&
            state.validity.valid &&
            phoneNumber.validity.valid &&
            password.validity.valid &&
            confirmPassword.validity.valid
          ) {
            alert("Submitted. Thank You! 👍🏻");
          }
        });

        const resetButton = document.querySelector(".reset");
        resetButton.addEventListener("click", function clearForm() {
          const activeErrorMsgNodeList = document.querySelectorAll(".active");
          for (let i = 0; i < activeErrorMsgNodeList.length; i++) {
            activeErrorMsgNodeList[i].textContent = "";
            activeErrorMsgNodeList[i].className = "error-message";
          }
        });


   function errorMsg() {

    if (document.activeElement == name) {
        if (name.validity.valueMissing) {
        nameMsg.textContent = "Please write your full name.";
        } else if (name.validity.tooShort) {
          nameMsg.textContent = "Name is too short, please write name and surname!";
        }
        nameMsg.className = "error-message active";
      }

    if (document.activeElement == email) {
        if (email.validity.valueMissing) {
          emailMsg.textContent = "You need to enter an email address.";
        } else if (email.validity.typeMismatch) {
          emailMsg.textContent = "Entered value needs to be an email address.";
        }
        emailMsg.className = "error-message active";
      }

    if (document.activeElement == adress) {
        if (adress.validity.valueMissing) {
          adressMsg.textContent = "You need to specify your adress.";
        } else if (adress.validity.tooShort) {
          adressMsg.textContent = "Specified adress value is too short (min length is 5 characters!)";
        }
        adressMsg.className = "error-message active";
      }

    if (document.activeElement == city) {
        if (city.validity.valueMissing) {
          cityMsg.textContent = "You need to specify your city.";
        } else if (city.validity.tooShort) {
          cityMsg.textContent = "Specified city value is too short (min length is 2 characters!)";
        }
        cityMsg.className = "error-message active";
      }

      if (document.activeElement == zip) {
        if (zip.validity.valueMissing) {
          zipMsg.textContent = "You need to specify your zip code!";
        } else if (zip.validity.tooShort) {
          zipMsg.textContent = "Your zip code is too short!";
        } else if (zip.validity.patternMismatch) {
          zipMsg.textContent = "Zip code must contain 5 digits!";
        }
        zipMsg.className = "error-message active";
      }

      if (document.activeElement == state) {
        if (state.validity.valueMissing) {
          stateMsg.textContent = "You need to specify your state.";
        } else if (state.validity.tooShort) {
          stateMsg.textContent =
            "Specified state value is too short (min length is 2 characters!)";
        }
        stateMsg.className = "error-message active";
      }

      if (document.activeElement == phoneNumber) {
        if (phoneNumber.validity.valueMissing) {
        phoneNumberMsg.textContent = "You need to write your phone number (min 5 digits)!";
        } else if (name.validity.patternMismatch) {
          phoneNumberMsg.textContent = "Minimum 5 digits!";
        }
        phoneNumberMsg.className = "error-message active";
      }

      if (document.activeElement == password) {
        if (password.validity.valueMissing) {
          passwordMsg.textContent = "You need to specify a password!";
        } else if (password.validity.tooShort) {
          passwordMsg.textContent = "Your password is too short (min 6 characters!)";
        } else if (password.validity.patternMismatch) {
          passwordMsg.textContent =
            "Password must contain at least one upper case, one lower case, one number, and one special (!@#$%^&*)!";
        }
        passwordMsg.className = "error-message active";
      }
      
      if (document.activeElement == confirmPassword) {
        if (confirmPassword.validity.valueMissing) {
          confirmPasswordMsg.textContent = "You need to confirm your password!";
        } else if (confirmPassword.validity.patternMismatch) {
          if (password.value !== confirmPassword.value) {
            confirmPasswordMsg.textContent = "Your passwords do not match!";
          }
        }
        confirmPasswordMsg.className = "error-message active";
      }
    }
  })();
   
