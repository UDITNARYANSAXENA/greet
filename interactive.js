document.getElementById('greetButton').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value.trim();
    const ageInput = document.getElementById('ageInput').value.trim();
    const colorInput = document.getElementById('colorInput').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const greetingMessage = document.getElementById('greetingMessage');

    errorMessage.textContent = ''; // Clear previous errors
    greetingMessage.classList.remove('visible'); // Reset greeting visibility

    if (!nameInput) {
        errorMessage.textContent = 'Please enter your name!';
        return;
    }

    if (!ageInput || isNaN(ageInput)) {
        errorMessage.textContent = 'Please enter a valid age!';
        return;
    }

    if (!colorInput) {
        errorMessage.textContent = 'Please enter your Current city!';
        return;
    }

    // Construct and display the greeting message
    greetingMessage.textContent = `Hello ${nameInput}! At age ${ageInput}, living in  ${colorInput} city looks fantastic!`;
    greetingMessage.style.color = colorInput; // Apply favorite color to the message
    greetingMessage.classList.add('visible');
});
