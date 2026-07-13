// Dom Elements
const loginBox = document.getElementById('login-box');
const signupBox = document.getElementById('signup-box');
const goToSignup = document.getElementById('go-to-signup');
const goToLogin = document.getElementById('go-to-login');
const authSubtitle = document.getElementById('auth-subtitle');

// Switch View to Sign Up
goToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginBox.classList.add('hidden');
  signupBox.classList.remove('hidden');
  authSubtitle.textContent = "Create your account to get started with Swxft Studios.";
});

// Switch View to Login
goToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
  authSubtitle.textContent = "Welcome back! Please login to your account.";
});

// Guest Session Handling
document.querySelectorAll('.guest-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Continuing as guest...");
    // Direct destination routing logic will hook in here
  });
});

// Form Submission Listeners (Hook into API later)
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Login form submitted");
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Sign up form submitted");
});
