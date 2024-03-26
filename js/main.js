$(document).ready(function () {
    $("#send").click(function (event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const comment = $('#comment').val().trim();
    // const number = $('#number').val().trim();


    if (isAnyFieldEmpty(name, email, comment)) {
        setAlertValue('Please fill in all fields', 'danger');
        return;
    }

    if (isTooShort(name, 5) || isTooShort(comment, 5)) {
        setAlertValue('Name and Comment must be at least five characters long', 'warning');
        return;
    }

    if (!isValidEmail(email)) {
        setAlertValue('Please enter a valid email address.', 'danger');
        return;
    }

    // if (number !== "" && !isValidNumber(number)) {
    //     setAlertValue('Please enter a valid number.', 'danger');
    //     return;
    // }

    setAlertValue('Thank you for contacting us .', 'success');


    // Clear form fields
    $('#name').val('');
    $('#email').val('');
    $('#comment').val('');
    // $('#number').val('');


}


const setAlertValue = (message, type) => {
    const alertPlaceholder = $('#alert');
    const wrapper = $(
        `<div class="alert alert-${type} alert-dismissible" role="alert">` +
        `   <div class='h4'>${message}</div>` +
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
        '</div>'
    );
    alertPlaceholder.empty().append(wrapper);
}


function isAnyFieldEmpty(...fields) {
    return fields.some(field => field === '');
}

function isTooShort(value, minLength) {
    return value.length < minLength;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidNumber(number) {
    return !isNaN(number);
}




// loading

setTimeout(() => {
    $(".loading").hide(1000, 'swing');

}, 2500);