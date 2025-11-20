document.getElementById("signupForm").addEventListener("submit", processForm);

function processForm(event) {
    event.preventDefault(); 

    const data = {
        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        pass: document.getElementById("pass").value.trim(),

        state: document.getElementById("state").value,

        gender: document.querySelector('input[name="gender"]:checked')?.value || "",
        
        terms: document.getElementById("terms").checked,

        comment: document.getElementById("comment").value.trim()
    };

    console.log("Form Data:", data);
 
    if (data.name === "") {
        alert("Please enter your full name."); 
        return;
    }
    if (data.email === "") {
        alert("Please enter your email.");
        return;
    }
    if (data.pass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }
    if (data.phone.length < 10) {
        alert("Phone number must be at least 10 digits.");
        return;


    }
    if (!data.terms) {
        alert("You must agree to the terms.");
        return;
    }
  
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "response.json", true);

    xhr.onload = function () {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);

        document.getElementById("signupForm").innerHTML = "";


        document.getElementById("responseMessage").textContent = response.message;
    }
};

    xhr.onerror = function () {
        alert("AJAX request failed.");
    };

    xhr.send();

    console.log(data);
}