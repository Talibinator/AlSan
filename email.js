const section = document.querySelector("section");
const fullname = document.getElementById("name");
const message = document.getElementById("message");

function sendEmail(){

    const bodyMessage = `Name: ${fullname.value}<br>E-Mail: ${email.value}<br>Nachricht: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aliudurim1305@outlook.com",
        Password : "8D072BCB3F03C4ADEA8468E43C15E176A9DB",
        To : 'aliudurim1305@outlook.com',
        From : "aliudurim1305@outlook.com",
        Subject : fullname.value,
        Body : bodyMessage
    }).then(
      message =>{
        if(message == "OK")
            {
                Swal.fire({
                    title: "Erfolg",
                    text: "Ihre Nachricht wurde erfolgreich gesendet!",
                    icon: "success",
                  });
            }
      }
    );
}

section.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});


