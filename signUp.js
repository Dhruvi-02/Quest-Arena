function signUp(event) {
    event.preventDefault();
    let name= document.getElementById("name").value;
    let pass= document.getElementById("pass").value;

    if(name=="" || pass=="") {
        alert("Invalid Username or Password");
    }
    else {
        localStorage.setItem("name",name);
        localStorage.setItem("pass",pass);

        alert("Deatails saved successfully");
        window.location.href="login.html";

    }
}

