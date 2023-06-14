const email = document.querySelector("#email");
const password = document.querySelector("#password");

email.addEventListener("blur", function(e) {
    let errors = []
    let ver = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let ps = document.querySelector('.p_email');

    if (!ver.test(email.value) && email.value.length > 0) {
        errors.push("Ingrese un mail valido")
        ps.textContent = " " + errors
    }

    else {
        ps.textContent = ""
    }

    if (email.value.length == 0  && ps.textContent == "") {
        errors.push("Campo obligatorio")
        ps.textContent = " " + errors
    }

    if (errors.length > 0) {
        e.preventDefault();
    }
})

password.addEventListener("blur", function(e){
    let errors = [];
    let ps = document.querySelector('.p_password');

    if (password.value.length == 0) {
        errors.push ("Campo obligatorio");
        ps.textContent = " " + errors;
    }

    else {
        ps.textContent = ""
    }

    if (errors.length > 0) {
        e.preventDefault()
    }  
})