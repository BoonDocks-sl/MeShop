if (localStorage.getItem("currUser")) {
  window.location.href = "../shop/shop.html";
}

let users = [];

let form = document.getElementById("form");
let firstN = document.getElementById("firstName");
let lastN = document.getElementById("firstName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmP = document.getElementById("confirmPassword");

form.addEventListener("submit", userSignup);
function userSignup(event) {
  event.preventDefault();

  //checking if any field is empty + if pass == confirmpass
  if (
    firstN.value.trim() == "" ||
    lastN.value.trim() == "" ||
    email.value.trim() == "" ||
    password.value.trim() == "" ||
    confirmP.value.trim() == ""

  ) {
        document.querySelector(".error-fields").style.display = "block";
        return;
  } 
  else {
           document.querySelector(".error-fields").style.display = "none";
           if (password.value != confirmP.value) {
            console.log(password, confirmP);
            document.querySelector(".pass-mismatch").style.display = "block";
            return;
    } 
    else {
          document.querySelector(".pass-mismatch").style.display = "none";
    }
  }




  //checking if users array is already present in local storage
  if(localStorage.getItem("Users")){
    users =  JSON.parse(localStorage.getItem("Users"));
    console.log(users);
}else{
    //else initilize empty array
    users = [];
    console.log(users);
}


 //creating user object
 let newUser = {
    firstN: firstN.value.trim(),
    lastN: lastN.value.trim(),
    email: email.value.trim(),
    password: password.value, 
};

 //checking if newUser email already exits in my userDatabase
 for(let i = 0; i < users.length;i++){
    if(users[i].email == newUser.email){
        console.log(users[i].email,newUser.email);
        document.querySelector(".used-email").style.display ="block";
        email.style.border ="1px solid red";
        return;
    }
}

    email.style.border ="1px solid black";
    document.querySelector(".used-email").style.display ="none";

    //appending newUser to the users array
    users.push(newUser);
    localStorage.setItem("Users",JSON.stringify(users));

    //redirecting to login page after sucessful signup
    alert("Signup successful");
    window.location.href = "../login/login.html";


};
