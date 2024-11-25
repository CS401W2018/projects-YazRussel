// const menu = document.querySelector('#menu-icon');
// const navLinks = document.querySelector('.nav-links');

// menu.onclick = () => {
//     navLinks.classList.toggle('active');
// }

// document.getElementById('myForm').addEventListener('submit', function(event){
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     if(!email){
//         alert('Please enter your email address')
//         return;
//     }

//     const formData = {
//         email: email
//     };
    
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "message.json", true);
//     xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState === 4 && xhr.status ===200){
//             const response = JSON.parse(xhr.responseText);
//             document.getElementById("message").innerHTML = response.message;
//             document.getElementById("myForm").innerHTML = "";
//             alert("You're email address has been sent");
//         }
//         else if(xhr.readyState === 4){
//             alert('Error submitting form: ' + xhr.statusText)
//         }
//     };
//     xhr.send(JSON.stringify(formData));
//     console.log(formData);
// });

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const submitBtn = document.getElementById('submit'); // The submit div
    const sentence = document.getElementById("sentence");
    menu.onclick = () => {
        navLinks.classList.toggle('active');
    };

    // Event listener for the submit button
    submitBtn.addEventListener('click', function() {
        const email = document.getElementById('email').value;
        if (!email) {
            alert('Please enter your email address');
            return;
        }

        const formData = { email: email };

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "message.json", true); // Replace with your actual server endpoint
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8"); // Set the correct content type

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        document.getElementById("message").innerHTML = response.message;
                        document.getElementById('myForm').innerHTML = "";
                        submitBtn.style.display = 'none';
                        sentence.style.visibility = 'hidden';
                        // alert("Your email address has been sent. " + response.message); // Display the response message
                        alert("You're email has already been sent")
                    } catch (e) {
                        alert('Failed to parse response: ' + e);
                    }
                } else {
                    alert('Error submitting form: ' + xhr.statusText);
                }
            }
        };

        console.log("Sending data:", JSON.stringify(formData)); // Debug log
        xhr.send(JSON.stringify(formData)); // Send the data as JSON
    });
});
