const form = document.querySelector(".form");

const formClasses = {
  error: "error",
  success: "success",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputName = document.querySelector(".name");
  let inputEmail = document.querySelector(".email");

  validate(form);
});


function validate(form) {
  
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    validateField(input);
  })
}

function validateField(field) {
  const inputRegex = /^[A-Za-z]+$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;

  const value = field.value;
  const type = field.type;

  console.log( inputRegex.test(value));
  

    if (!value) {
    setFieldError(field);
    } else if (type == "email"  &&  !emailRegex.test(value)) {
          setFieldError(field);
    } else if (type == "text" && value.length <= 10 && !inputRegex.test(value)) {
        setFieldError(field); 
      } else {
        setFieldSuccess(field);
      }
}

function setFieldError(field) {
  field.classList.add(formClasses.error);
  field.classList.remove(formClasses.success);
}

function setFieldSuccess(field) {
  field.classList.add(formClasses.success);
  field.classList.remove(formClasses.error);
}
