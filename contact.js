// This implementation of javascript code is to improve the contact form in about us - Siyabonga Goqoza

// This code checks for validation before sending the info 
function validateInfo(){
    var firstName = document.getElementById("fname").value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var lastName = document.getElementById('lname').value;
    
 // Checks if the first name has no symbols   
    for (var i = 0;i <= firstName.length; i++) {
        if (firstName[i] == "%") {
           alert("The First name cannot have symbols!!");
        } else if (firstName[i] == "^") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "!") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "$") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "# ") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "@") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "*") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "-") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "+") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "/") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "\\") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == "=") {
            alert("The First name cannot have symbols!!");
         } else if (firstName[i] == ";") {
            alert("The First name cannot have symbols!!");
        }
        
    }
    


 // Checks if the last name has no symbols   
    for (var i = 0;i <= lastName.length; i++) {
        if (lastName[i] == "%") {
           alert("The Last name cannot have symbols!!");
        } else if (lastName[i] == "^") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "!") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "$") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "# ") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "@") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "*") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "-") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "+") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "/") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "\\") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == "=") {
            alert("The Last name cannot have symbols!!");
         } else if (lastName[i] == ";") {
            alert("The Last name cannot have symbols!!");
        }

      
        
    }

    // checks if the text fields are filled
    if (firstName.length == 0) {
        alert("The First name is required");
        firstName = "Required";
    }
    if (lastName.length == 0) {
        alert("The Last name is required");
        lastName = "Required";
    }
    if (email.length == 0) {
        alert("The E-mail is required");
        email = "Required";
    }
    if (message.length == 0) {
        alert("No Message to be sent");
        message = "Message missing";
    }
   

    var guardian = document.getElementById('guardian').checked;
    var student = document.getElementById('student').checked;
    var person;
 // checks if the person is a guardian or student   
    if (guardian){
        person = "Guardian";
        alert("Message was sent by a " + person);
    } else if (student){
        person = "Student";
        alert("Message was sent by a " + person);
    } else {
        alert("Please Check the boxes");
    }
         
    
   
   
}   