// IIFE

(function () {
    const quotes = [
        {
            quotes: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
            author: " Life"
        },
        {
            quotes: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
            author: "John Kenneth Galbraith"
        },
        {
            quotes: "God save me from my friends. I can protect myself from my enemies.",
            author: "Claude Louis Hector de Villars "
        },
        {
            quotes: "The price of anything is the amount of life you exchange for it.",
            author: "David Thoreau"
        },
        {
            quotes: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
            author: "Charles Lindbergh"
        },
        {
            quotes: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
            author: "Tyne Daly"
        }
    ]

    const btn = document.getElementById('generate-btn');
    btn.addEventListener("click", function () {
        let randomQu = Math.floor(Math.random() * quotes.length);

        document.getElementById("qutes-text").textContent = quotes[randomQu].quotes;
        document.getElementById("author").textContent = "- " + quotes[randomQu].author;
    })
}())