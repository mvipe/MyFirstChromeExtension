fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(jokeData => {
        const jokesText = jokeData.attachments[0].text;
        const insertJokes = document.getElementById("insert");
        insertJokes.innerHTML = jokesText;
    })

