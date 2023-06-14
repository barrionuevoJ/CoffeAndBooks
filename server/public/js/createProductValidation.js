const title = document.querySelector("#titulo");
const description = document.querySelector("#descripcion");
const img = document.querySelector("#img");
const error = document.querySelector('.ps')

title.addEventListener("blur", function(e){
    let errors = []
    let ps = document.querySelector('.p_title');

    if (title.value.length == 0) {
        errors.push("Campo obligatorio");
        console.log(errors);
    }

    if (title.value.length < 5) {
        errors.push ("Campo debe contener por lo menos 5 caracteres");
        console.log(errors);
    }
})

description.addEventListener("blur", function(e){
    let errors = [];
    let ps = document.querySelector('.p_description');

    if (description.value.length < 20 && description.value.length > 0) {
        errors.push("Debe contener por lo menos 20 caracteres");
        ps.textContent = " " + errors
    }

    else {
        ps.textContent = ""
    }

    if (description.value.length < 1 && ps.textContent == "") {
        errors.push("Campo obligatorio");
        ps.textContent = " " + errors
    }

})

img.addEventListener("change", function(e){
    let errors = []
    let ver = /(\.jpg|\.jpeg|\.png)$/i;
    let ps = document.querySelector('.p_img');

    if (!ver.test(img.value)) {
        errors.push("Solo soportamos .jpg, .jpeg, .png");
        ps.textContent = errors;
    }

    if (errors.length > 0) {
        e.preventDefault();
    }
})