const quotes = [
    {
        text: "La vie est soit une grande aventure ou rien.",
        author: "Helen Keller"
    },
    {
        text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
        author: "Winston Churchill"
    },
    {
        text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        author: "Steve Jobs"
    },
    {
        text: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.",
        author: "Sénèque"
    },
    {
        text: "Le plus grand plaisir dans la vie est de réaliser ce que les autres vous pensent incapable de réaliser.",
        author: "Walter Bagehot"
    },
    {
        text: "La créativité, c'est l'intelligence qui s'amuse.",
        author: "Albert Einstein"
    },
    {
        text: "Le meilleur moyen de prédire l'avenir est de le créer.",
        author: "Peter Drucker"
    },
    {
        text: "Tout ce que vous pouvez imaginer est réel.",
        author: "Pablo Picasso"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    
    // Ajoute une animation simple de fondu
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    
    setTimeout(() => {
        quoteText.textContent = text;
        quoteAuthor.textContent = `- ${author}`;
        
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 300);
}

// Génère une citation au chargement de la page
displayQuote();

// Ajoute l'événement au bouton
generateBtn.addEventListener('click', displayQuote);

// Ajoute une transition CSS pour l'animation de fondu
quoteText.style.transition = 'opacity 0.3s ease';
quoteAuthor.style.transition = 'opacity 0.3s ease';