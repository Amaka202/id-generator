document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate');
    const nameInput = document.getElementById('name');
    const output = document.getElementById('output');

    generateButton.addEventListener('click', function () {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Please enter a name.");
            return;
        }

        const initials = getInitials(name);
        const randomNumbers = getRandomNumbers(6);
        const userId = `${initials}/${randomNumbers}`;

        output.textContent = `This is ${name}'s ID: ${userId}`;
    });

    function getInitials(name) {
        const parts = name.split(' ');
        if (parts.length < 2) {
            return name.substring(0, 2).toUpperCase();
        }
        const firstInitial = parts[0][0].toUpperCase();
        const lastInitial = parts[parts.length - 1][0].toUpperCase();
        return `${firstInitial}${lastInitial}`;
    }

    function getRandomNumbers(length) {
        let result = '';
        const characters = '0123456789';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
});
