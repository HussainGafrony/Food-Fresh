$(document).ready(function () {
    $("#send").click(function () {
        validateForm();
    });
});

function validateForm() {
    const name = $('#name').val();
    const email = $('#email').val();
    const comment = $('#comment').val();
    const number = $('#number').val();


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

    if ($('#number').hasClass('services-number')) {
        if (number === "") {
            setAlertValue('Please enter a valid number.', 'danger');
            return;
        }

    }
    checkTotal() ? setAlertValue('Thank you for reaching out to us. We appreciate your message', 'success')
        : setAlertValue("it seems you've chosen an incorrect answer ,give it another try, and you'll surely get the right answer!", 'danger');
    // setAlertValue('Thank you for contacting us .', 'success');


    // Clear form fields
    $('#name').val('');
    $('#email').val('');
    $('#comment').val('');
    $('#number').val('');


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


function checkTotal() {
    const num1 = Math.floor(Math.random() * 100);

    const num2 = Math.floor(Math.random() * 100);

    const correctTotal = num1 + num2;
    const userInput = parseInt(prompt("Enter the total of " + num1 + " and " + num2));
    if (userInput === correctTotal) {
        return true;
    } else {
        return false;
    }

}

function toggleRTL() {
    function toggleRTL() {
        $('html').attr('dir', $('html').attr('dir') === 'rtl' ? 'ltr' : 'rtl');
        $('link[rel=stylesheet]').last().attr('href', function(i, href) {
            return href.replace('bootstrap.rtl', 'bootstrap').replace('bootstrap', 'bootstrap.rtl');
        });
    }

    $('#ar-btn').click(toggleRTL);
    $('#en-btn').click(toggleRTL);

}





// loading

setTimeout(() => {
    $(".loading").hide(1000, 'swing');

}, 2500);