window.onload = () => {
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const password = document.querySelector('#password');
    const confirmationPassword = document.querySelector('#passwordConfirm');
    const email = document.querySelector('#email');
    const profilePic = document.querySelector('#profileImg');

    firstName.addEventListener('focus', function (e) {
        let errors = [];

        if (firstName.value == 0) {
            errors.push("Campo obligatorio")
            console.log("Working");
        }

        if (errors.length > 0) {
            e.preventDefault();
        }
    });

    lastName.addEventListener('focus', function (e) {
        let errors = [];

        if (lastName.value == 0) {
            errors.push("Campo obligatorio")
            console.log("Working");
        }

        if (errors.length > 0) {
            e.preventDefault();
        };


    });

    password.addEventListener('blur', function (e) {
        let errors = [];

        if (password.value == 0 && password.value.length < 8) {
            errors.push("Campo obligatorio", "la contraseña debe tener más de 8 caracteres")
            console.log(errors);
        }

        if (errors.length > 0) {
            e.preventDefault()
        }
    })

    confirmationPassword.addEventListener('change', function (e) {
        let errors = [];

        if (confirmationPassword !== password) {
            errors.push("")
        }

        if (confirmationPassword.value.length < 0) {

        }

        if (confirmationPassword.value == 0) {

        }
    })
}