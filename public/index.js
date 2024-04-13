document.addEventListener("DOMContentLoaded", function() {

    var button1 = document.getElementById("nextButton1");
    if (button1) {
        button1.addEventListener("click", function() {
            window.location.href = "page2.html";
        });
    }

    var button2 = document.getElementById("nextButton2");
    if (button2) {
        button2.addEventListener("click", function() {
            window.location.href = "signup.html";
        });
    }

    var button3 = document.getElementById("confirmButton");
    if (button3){
        button3.addEventListener("click", function(){
            window.location.href = "tracker.html";
        });
    }

    var button4 = document.getElementById("homeButton");
    if(button4){
        button4.addEventListener("click", function(){
            window.location.href = "index.html";
        });
    }

    var button5 = document.getElementById("backButton");
    if(button5){
        button5.addEventListener("click", function(event){
            window.location.href = "goals.html";
        });
    }

    var button6 = document.getElementById("backButton2");
    if(button6){
        button6.addEventListener("click", function(){
            window.location.href = "tracker.html";
        });
    }

    var button7 = document.getElementById("createAccountButton");
    if(button7){
        button7.addEventListener("click", function(){
            window.location.href = "login.html";
        });
    }

    var button8 = document.getElementById("signInButton");
    if(button8){
        button8.addEventListener("click", function(){
            window.location.href = "goals.html";
        });
    }

    var button9 = document.getElementById("addButton");
    if(button9){
        button9.addEventListener("click", function(){
            window.location.href = "goals.html";
        });
    }

});