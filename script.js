document.addEventListener("DOMContentLoaded" , () => {
    const form = document.getElementById("hiremeForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let validationSuccess = true;

        // Regex pattern 
        const namePattern = /^[A-Za-z]+$/;
        const emailPattern = /^[^\s@]+[^\s@]+\.[^s@]+$/;
        const messagePattern = /^.{5,}$/;

        const userName = document.getElementById("inputName");
        const email = document.getElementById("inputEmail");
        const message = document.getElementById("message");

        document.querySelectorAll(".error").forEach(clear => clear.textContent = "");

        // testing username
        if(!namePattern.test(userName.value)){
            document.getElementById("nameError").textContent="Username must contain letters";
            validationSuccess = false;
        }
        
        // testing user email
        if(!emailPattern.test(email.value)) {
            document.getElementById("inputEmail").textContent = "Enter the valid Email";
            validationSuccess = false;
        }

        // testing message
        if(!messagePattern.test(message.value)) {
            document.getElementById("message").textContent = "message must contain atleast 5 characters";
            validationSuccess = false;
        }

        // validation success alert
        if(validationSuccess){
            alert("Form submitted Successfully");
            form.reset();
        }
    })
})
