

function vanillaTilt(element) {
    VanillaTilt.init(document.querySelector(element), {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
    });
}

vanillaTilt(".info1");
vanillaTilt(".info2");
vanillaTilt(".info3");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
let form_name = document.getElementById("fname");
let number = document.getElementById("number");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (
        form_name.value == "" &&
        email.value == "" &&
        subject.value == "" &&
        message.value == ""
    ) {
        alert("All fields are required");
        return;
    } else {
        
        sent();
    }
});

async function sent() {
    const data = `

╔═══════════════════════════════════════╗
            AC-aari Designs             
╚═══════════════════════════════════════╝
    Name:      ${form_name.value}
    Number:    ${number.value}
    Email:     ${email.value}
    Subject:   ${subject.value}
    Message:   ${message.value}
════════════════════════════════════════
  This message is for AC-aari Designs.
────────────────────────────────────────
Thank you for contacting us. We'll get back to you soon!

`;

    await fetch(`https://api.telegram.org/bot5830822420:AAGvhHGM5UIEOKo6hUa4lPQkwoAdnW8i5eQ/sendMessage?chat_id=1392062029&text=${encodeURIComponent(data)}`);
    alert("Message Sent Successfully");
}


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
