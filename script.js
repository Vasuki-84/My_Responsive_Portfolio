document.addEventListener("DOMContentLoaded" , () => {
    const form = document.getElementById("hiremeForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let validationSuccess = true;

        // Regex pattern 
        const namePattern = /^[A-Za-z]+$/;
        const emailPattern = /^[^\s@]+[^\s@]+\.[^s@]+$/;
        const messagePattern = /^.{5,}$/;


        // input fields
        const userName = document.getElementById("inputName");
        const email = document.getElementById("inputEmail");
        const message = document.getElementById("message");

        document.querySelectorAll(".error").forEach(clear => clear.textContent = "");

        // testing username
        if(!namePattern.test(userName.value)){
             document.getElementById("nameError");
               nameError.innerHTML = `
        <div class="alert alert-danger p-2 mt-2 mb-0" role="alert">
            Username must contain letters
        </div>
    `;
            validationSuccess = false;
        }
        
        // testing user email
        if(!emailPattern.test(email.value)) {
            document.getElementById("emailError");
            emailError.innerHTML = `
        <div class="alert alert-danger p-2 mt-2 mb-0" role="alert">
         Enter the valid Email 
         </div>`;
            validationSuccess = false;
        }

        // testing message
        if(!messagePattern.test(message.value)) {
            document.getElementById("messageError");
            messageError.innerHTML =`
            <div class="alert alert-danger p-2 mt-2 mb-0 " role="alert"> Message must contain atleast 5 characters </div>`;
            validationSuccess = false;
        }

        // validation success alert
        if(validationSuccess){
            alert("Form submitted Successfully");
            form.reset();
        }
    })
})
