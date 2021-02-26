/* Sending Email from Contact Section */
(function () {
    emailjs.init("user_8jpCBfrwekMP73867CLpC");
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

        emailjs.send('service_z6ymxkt', 'template_q66697q', contactParams).then(function (res) {})
}
