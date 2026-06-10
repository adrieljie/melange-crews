document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('loginBtn');
    const alertDiv = document.getElementById('alertMessage');

    hideAlert();
    
    if (!email || !password) {
        showAlert('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address.', 'error');
        return;
    }
    
    loginBtn.disabled = true;
    loginBtn.textContent = 'Signing in...';
    
    try {
        await simulateLogin(email, password);
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
        
    } catch (error) {
        showAlert(error.message, 'error');
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Sign in';
    }
});

function simulateLogin(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password.length >= 6) {
                resolve({ success: true });
            } else {
                reject(new Error('Invalid email or password. Please try again.'));
            }
        }, 1500);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(message, type) {
    const alertDiv = document.getElementById('alertMessage');
    const alertText = document.getElementById('alertText');
    
    alertText.textContent = message;
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.display = 'block';

    if (type === 'success') {
        setTimeout(hideAlert, 5000);
    }
}

function hideAlert() {
    document.getElementById('alertMessage').style.display = 'none';
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const isPassword = passwordInput.type === 'password';
    
    passwordInput.type = isPassword ? 'text' : 'password';
    
    const toggleBtn = document.querySelector('.password-toggle svg');
    if (isPassword) {
        toggleBtn.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        `;
    } else {
        toggleBtn.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        `;
    }
}

function handleSignup() {
    alert('Redirecting to signup page...');
    window.location.href = 'sign_up.html';
}

document.getElementById('email').addEventListener('input', hideAlert);
document.getElementById('password').addEventListener('input', hideAlert);