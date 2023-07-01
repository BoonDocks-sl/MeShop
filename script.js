

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

loginBtn.addEventListener("click", ()=>{
    window.location.href = "./login/login.html";
});

signupBtn.addEventListener("click",()=>{
    window.location.href ="./signup/signup.html"
});



// Add event listener for the Login button
document.querySelector("#login-btn").addEventListener("click", ()=>{
    // Redirect to login page
    window.location.href="./login/login.html"
})

// Add event listener for the Signup button
document.querySelector("#signup-btn").addEventListener("click", ()=>{
    // Redirect to signup page
    window.location.href="./signup/signup.html"
})