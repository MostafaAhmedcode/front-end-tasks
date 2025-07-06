const surpriseBtn = document.getElementById('surpriseBtn');
const messageDiv = document.querySelector('.message');

const surprises = [
    "You are amazing!",
    "Believe in yourself!",
    "Today is your lucky day!",
    "Success is coming!",
    "Stay positive and strong!"
];

function getSurpriseMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * surprises.length);
            resolve(surprises[randomIndex]);
        }, 2000);
    });
}

surpriseBtn.addEventListener('click', () => {
    messageDiv.textContent = "Loading...";

    getSurpriseMessage()
        .then(message => {
            messageDiv.textContent = message;
        })
        .catch(error => {
            messageDiv.textContent = "Something went wrong!";
        });
});