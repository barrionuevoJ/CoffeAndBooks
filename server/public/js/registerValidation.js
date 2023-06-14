window.onload = () => {
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const password = document.querySelector('#password');
    const confirmationPassword = document.querySelector('#passwordConfirm');
    const email = document.querySelector('#email');
    const profilePic = document.querySelector('#profileImg');

    firstName.addEventListener('blur', function (e) {
        let errors = [];
        let ps = document.querySelector('.p_name')

        if (firstName.value.length < 2 && firstName.value.length > 0) {
            errors.push("Debe contener por lo menos 2 caracteres")
            ps.textContent = errors;
        }

        else {
            ps.textContent = "";
        }

        if (firstName.value.length < 1 && ps.textContent == "") {
            errors.push("Campo obligatorio")
            ps.textContent = errors;
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    });

    lastName.addEventListener('blur', function (e) {
        let errors = [];
        let ps = document.querySelector('.p_surname')

        if (lastName.value.length < 2 && lastName.value.length > 0) {
            errors.push("Debe contener por lo menos 2 caracteres")
            ps.textContent = errors;
        }

        else {
            ps.textContent = "";
        }

        if (lastName.value.length < 1 && ps.textContent == "") {
            errors.push("Campo obligatorio")
            ps.textContent = errors;
        }

        if (errors.length > 0) {
            e.preventDefault();
        }


    });

    password.addEventListener('blur', function (e) {
        let errors = [];
        let ver = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let ps = document.querySelector('.p_password')

        if (!ver.test(password.value) && password.value.length > 0) {
            errors.push("La contraseña debe contener por lo menos 8 caracteres (Mayuscula, Minuscula, numero y simbolo)")
            ps.textContent = errors;
        }

        else {
            ps.textContent = "";
        }

        if (password.value.length < 1 && ps.textContent == "") {
            errors.push("Campo obligatorio")
            ps.textContent = errors;
        }
    })

    confirmationPassword.addEventListener('blur', function (e) {
        let errors = [];
        let ps = document.querySelector('.p_passcon')

        if (confirmationPassword.value !== password.value) {
            errors.push("Las contraseñas no coinciden")
            ps.textContent = errors
        }

        else {
            ps.textContent = ""
        }

        if (confirmationPassword.value.length < 1 && ps.textContent == "") {
            errors.push("Campo obligatorio")
            ps.textContent = errors
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    })

    email.addEventListener("blur", function (e) {
        let errors = [];
        let ver = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let ps = document.querySelector('.p_email')

        if (!ver.test(email.value) && email.value.length > 0) {
            errors.push("Ingrese un mail valido")
            ps.textContent = " " + errors
        }

        else {
            ps.textContent = ""
        }

        if (email.value.length == 0 && ps.textContent == "") {
            errors.push("Campo obligatorio")
            ps.textContent = " " + errors
        }
    })

    profilePic.addEventListener("blur", function (e) {
        let errors = []
        let ver = /(\.jpg|\.jpeg|\.png)$/i;
        let ps = document.querySelector('.p_img')

        if (ver.exec(email.value)) {
            errors.push("Solo soportamos .jpg, .jpeg, .png");
            ps.textContent = errors;
        }

        else {
            ps.textContent = ""
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    })
}