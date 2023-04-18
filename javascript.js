var password = document.getElementById("password")
    , confirm_password = document.getElementById("password-confirm")
    , error_label = document.getElementById("password-error");

function validatePassword() {
    if(password.value != confirm_password.value)
    {
        confirm_password.setCustomValidity("Passwords Don't Match");
        error_label.innerHTML = "* Passwords Don't Match";
        password.style="border-color: red";
    }
    else
    {
        confirm_password.setCustomValidity("");
        error_label.innerHTML = "";
        password.style="border-color: green";
    }
}

password.onchange = validatePassword;
confirm_password.onchange = validatePassword;