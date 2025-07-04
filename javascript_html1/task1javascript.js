function getFortune() {
    let fortunes = [
        "You will have a lucky day!",
        "Something amazing will happen soon.",
        "Believe in your dreams.",
        "A surprise is coming your way.",
        "You will meet someone special.",
        "Success is on the way!"
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("result").innerText = fortunes[randomIndex];
}