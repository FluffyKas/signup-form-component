const form = document.getElementById("signup-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
 
form.addEventListener("submit", e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //saving input values, trimming empty spaces (if there's any)
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    //show error message, add error class
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    //add success class
    setSuccessFor(firstName);
  };

  if (lastNameValue === "") {
    //show error message, add error class
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    //add success class
    setSuccessFor(lastName);
  };

  if (emailValue === "") {
    //show error message, add error class
    setErrorFor(email, "Email cannot be empty");
  } else if (!isItEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    //add success class
    setSuccessFor(email);
  };

  if (passwordValue === "") {
    //show error message, add error class
    setErrorFor(password, "Password cannot be empty");
  } else {
    //add success class
    setSuccessFor(password);
  };

};

// in case of ERROR
function setErrorFor(input, message){
  const formComponent = input.parentElement;
  const errorMessage = formComponent.querySelector(".error-message");

  //changing error message
  errorMessage.innerText = message;

  //adding error class
  formComponent.className = "form-components error";
};

// in case of SUCCESS
function setSuccessFor(input) {
  const formComponent = input.parentElement;

  // adding success class
  formComponent.className = "form-components success";
};


//checking email input validity
function isItEmail (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
