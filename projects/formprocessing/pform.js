document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const phone_number = document.getElementById('pnumber').value;
    const email = document.getElementById('mail').value;
    const password = document.getElementById('pword').value;
    
    if (!firstname || !lastname) {
        alert("First name and last name are required.");
        return;
    }
    if (phone_number.length !== 10) {  // Check for exact length
        alert("The phone number must consist of 10 digits");
        return;
    }
    
    const formData = {
        firstname: firstname,  // Corrected the property name from 'firstnam' to 'firstname'
        lastname: lastname,
        phone_number: phone_number,
        email: email,
        password: password
    };
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {  // Request has completed
                const response = JSON.parse(xhr.responseText);
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("myForm").reset();  // Reset form fields instead of erasing form content
                alert('Form submitted successfully.');
            }
            else if(xhr.readyState === 4){  // Some other status code
                alert('Error submitting form: ' + xhr.statusText);
            }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
