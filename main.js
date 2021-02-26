/* Sending Email from Contact Section */
(function () {
    emailjs.init("user_xrRjTKr9MdESSiAEa8RIA");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        emailjs.send('service_mt3wqrh', 'template_s0h1dwo', contactParams).then(function (res) {})
}
