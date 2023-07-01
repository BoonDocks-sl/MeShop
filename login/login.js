//if currUser is there the redirect to homepage
if(localStorage.getItem("currentUser")){
    window.location.href ="../shop/shop.html";
}



//getting login btn
const form = document.getElementById("form");

form.addEventListener("submit",login);

function login(event){
    event.preventDefault();

    //getting data from localStorage of signedup users
    let users = JSON.parse(localStorage.getItem("Users"));
    
    let emailVal = document.getElementById("email").value;
    let passVal = document.getElementById("password").value;

    //if there is no user in localStorage
    if(!users){
        document.querySelector(".signup_error").style.display = "block";
        return;
    } else{
        document.querySelector(".signup_error").style.display = "none";
    }

    //checking if newUser email already exits in my userDatabase
    for(let i = 0; i < users.length;i++){
        if(users[i].email == emailVal && users[i].password == passVal){
            
            //creating currUser var to
            var current = {
                firstN : users[i].firstN,
                lastN : users[i].lastN,
                email : emailVal,
                password : passVal,
                token : genAccessToken(16),
            }
        
            localStorage.setItem("currentUser",JSON.stringify(current));
            console.log(current);
            
            //hiding error msg
            document.querySelector(".incorrect-pass").style.display = "none";

            //redirecting to shop page
            window.location.href = "../shop/shop.html"
            return;
        }
    }
    document.querySelector(".incorrect-pass").style.display = "block";
}

//Generating token's
function genAccessToken(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}





