$(document).ready(function() {

    $('form').validate({
        rules: {
            first_name: {
                required: true,
                minlength: 2,
                maxlength: 12
            },
            last_name: {
                required: false,
                minlength: 3,
                maxlength: 12
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
            }
        }
    });
});
