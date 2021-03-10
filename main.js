let regName = /[A-Za-z][А-Яа-яЁё]/
let regPhone = /^\+7\(\d{3}\)\d{3}\-\d{4}/
let regMail = /^[a-z]{2}\.\-?[a-z]{4}@[a-z]{4}\.[a-z]{2}/

let inp = document.querySelector('.phone');

document.querySelector('.submitBt').addEventListener('click', e => {
    e.preventDefault();

    if (!validate(regPhone, inp.value)) {
        notValid();
    } else {
        valid();
    }
})

let validate = (regex, inp) => {
    return regex.test(inp);
}

let valid = () => {
    inp.classList.remove('notValid');
    inp.classList.add('valid');
}

let notValid = () => {
    inp.classList.add('notValid');
}