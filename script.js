const passwordInput = document.getElementById('password');
const strengthMeter = document.querySelector('.strength-meter');
const strengthText = document.getElementById('strength-text');

const checkPasswordStrength = (password) => {
    let strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check for lowercase, uppercase, numbers, and special characters
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

    return strength;
};

const updateStrength = () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    // Update strength bar and text based on strength level
    let strengthClass = '';
    let strengthColor = '';

    
    if (strength <= 1 ) {
        strengthClass = 'Superweak';
        strengthColor = 'red';
        strengthText.textContent = 'Super-Weak password';
    } else if (strength == 2) {
        strengthClass = 'Weak';
        strengthColor = 'orange';
        strengthText.textContent = 'Weak password';
    } else if (strength == 3) {
        strengthClass = 'Average';
        strengthColor = 'yellow';
        strengthText.textContent = 'Average password';
    } else if (strength == 4) {
        strengthClass = 'Moderate';
        strengthColor = 'green';
        strengthText.textContent = 'Moderate password';
    }  else {
        strengthClass = 'Strong';
        strengthColor = 'darkgreen';
        strengthText.textContent = 'Strong password';
    }

 strengthMeter.style.width = `${(strength / 5) * 100}%`;
strengthMeter.className = `strength-meter ${strengthClass}`;

};

passwordInput.addEventListener('input', updateStrength);