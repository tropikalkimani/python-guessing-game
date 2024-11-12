//1. document = access document
//2. .getElementById("") = target an element using id attribute
//3. .addEventListener("") = target an event
//4. function to be executed when event triggered or when it occurs


// document.getElementById("click-here-btn").addEventListener("click", function(){
//     alert("You clicked here")
// });

// document.getElementById("p-text").innerHTML = "Text justed changed HaHa!!";

// document.getElementById("p-text").style.fontStyle = "italic";

function validateForm() {
    let valid = true;

    // validate name
    let name = document.getElementById("name").value;
    if (name === ""){
        document.getElementById("nameError").innerHTML = "Name is required.";
        valid = false;
    }

    //email validation
    let email = document.getElementById("email").value;
    if (email === ""){
        document.getElementById("emailError").innerHTML = "Email is required.";
        valid = false;
    }

    //password validation
    let password = document.getElementById("password").value;
    if (password === ""){
        document.getElementById("passwordError").innerHTML = "Password is required.";
        valid = false;
    } else if(password.length > 8){
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters.";
        valid = false;
    }

    //age validation
    let age = document.getElementById("age").value;
    if (age === ""){
        document.getElementById("ageError").innerHTML = "Age is required";
        valid = false;
    } else if (isNaN(age) || age < 18){
        document.getElementById("ageError").innerHTML = "Age must be a number above 18";
        valid = false;
    }

    //gender validation
    let gender = document.getElementById("gender").value;
    if (gender === ""){
        document.getElementById("genderError").innerHTML = "Gender is required";
        valid = false;
    }

    //country validation
    let country = document.getElementById("country").value;
    if (country === ""){
        document.getElementById("countryError").innerHTML = "Country is required";
        valid = false;
    }

    //terms and conditions validation
    let terms = document.getElementById("terms").value;
    if (terms === ""){
        document.getElementById("termsError").innerHTML = "Must agree to Terms and Conditions";
        valid = false;
    }

    //if all vaidations pass, form is submitted
    return valid;
};