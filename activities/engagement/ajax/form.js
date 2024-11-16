document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const pword = document.getElementById('pword').value;
    const age = document.getElementById('age').value;
    if(!fname || !lname){
        alert("First name and Last name required");
        return;
    }
    if(!age || age < 18){
        alert("You must be 18 or older to submit this form");
        return;
    }
    const formData = {
        fname: fname,
        lname: lname,
        pword: pword,
        age: age,
        // remember: document.getElementById('rember').checked,
        state: document.getElementById('state').value
        
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json.charset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML =  response.message;
            document.getElementById("myForm").innerHTML = "";
            alert('Form submitted successfully.');
        }else if(xhr.readyState === 4){
            alert('Error submitting form.');
        }
        
    };
    xhr.send(JSON.stringify(formData));
    
    //This will run first. 
    console.log(formData)
    // alert("You submitted the form!")
});