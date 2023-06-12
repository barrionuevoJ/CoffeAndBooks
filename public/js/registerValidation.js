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

        if (firstName.value.length < 2) {
            errors.push("Debe contener por lo menos 2 caracteres")
            ps.textContent = errors;
        };

        if (firstName.value == 0 && ps.textContent == "") {
            errors.push("Campo obligatorio")
            ps.textContent = errors;
        }

        else {
            ps.textContent = "";
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    });

    lastName.addEventListener('blur', function (e) {
        let errors = [];

        if (lastName.value == 0) {
            errors.push("Campo obligatorio")
            console.log(errors);
        }

        if (lastName.value.length < 3) {
            errors.push("Debe contener por lo menos 2 caracteres")
            console.log(errors);
        }

        if (errors.length > 0) {
            e.preventDefault();
        };


    });

    password.addEventListener('blur', function (e) {
        let errors = [];
        let ver = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!ver.test(password.value)) {
            errors.push("La contraseña debe contener por lo menos 8 caracteres (Mayuscula, Minuscula, numero y simbolo)")
            console.log(errors)
        }

        if (errors.length > 0) {
            e.preventDefault()
        }
    })

    confirmationPassword.addEventListener('blur', function (e) {
        let errors = [];

        if (confirmationPassword.value !== password.value) {
            errors.push("Las contraseñas no coinciden")
            console.log(errors)
        }

        if (confirmationPassword.value.length < 1) {
            errors.push("Campo obligatorio")
            console.log(errors);
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    })

    email.addEventListener("blur", function(e){
        let errors = [];
        let ver = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!ver.test(email.value)) {
            errors.push("Ingrese un email valido");
            console.log(errors)
        }

        if (email.value.length == 0) {
            errors.push("Campo obligatorio");
            console.log(errors)
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    })

    profilePic.addEventListener("blur", function(e){
        let errors = []
        let ver = /(\.jpg|\.jpeg|\.png)$/i;

        if (ver.exec(email.value)) {
            errors.push("Solo soportamos .jpg, .jpeg, .png");
            console.log(errors);
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    })
}