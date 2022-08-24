function validate() {
    var name = document.form1.text1.value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    // var error_message = document.getElementById("error_message");

    // error_message.style.padding = "10px";

    var text;
    var letters = /^[A-Za-z]+$/;
    
    if (!name.match(letters)) {
        text = "Please Enter valid Name";
        alert(text);
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        alert(text);
        return false;
    }
    if (subject == null || subject.trim() == "") {
        text = "Enter Subject";
        alert(text);
        return false;
    }
    if (message == null || message.trim() == "") {
        text = "Enter a message";
        alert(text);
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}