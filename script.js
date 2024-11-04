const form = document.querySelector(".form");

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    let inputName = document.querySelector(".name");
    let inputEmail = document.querySelector(".email");

    validate(form);
});


function validate (form) {
    let inputs = document.querySelectorAll("input");

    const inputRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    
    inputs.forEach((input)=> {

        const value = input.value;
      console.log(emailRegex.test(value))

        if (input.type == "email") {
            lightInput(input, emailRegex.test(value));
        } else {

            lightInput(input, inputRegex.test(input));
        }
    })
}

function lightInput(input, corrected){
    (corrected) ? input.style.border = "2px solid green" : input.style.border = "2px solid red";
}