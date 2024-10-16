const books = [
    {
        title: "L'Étranger",
        code: "9782070368220",
        author: "Albert Camus",
        format: "Papier, Epub",
        description: "Un récit sur l'absurdité de la vie et l'indifférence de l'univers.",
        price: "7,50 €",
        image: "assets/ L'Étranger.jpg"
    },
    {
        title: "Le Petit Prince",
        code: "9782070612758",
        author: "Antoine de Saint-Exupéry",
        format: "Papier, Epub",
        description: "Une fable poétique sur la perte de l'innocence et l'amitié.",
        price: "10,00 €",
        image: "assets/Le Petit Prince.jpg"
    },
    {
        title: "Les Misérables",
        code: "9782070406465",
        author: "Victor Hugo",
        format: "Papier, Epub",
        description: "Un roman épique sur la lutte pour la justice sociale.",
        price: "12,99 €",
        image: "assets/Les Misérables.jpg"
    },
    {
        title: "Madame Bovary",
        code: "9782070408490",
        author: "Gustave Flaubert",
        format: "Papier, Epub",
        description: "L'histoire tragique d'une femme en quête d'amour et d'évasion.",
        price: "9,90 €",
        image: "assets/Madame Bovary.jpg"
    },
    {
        title: "Le Comte de Monte-Cristo",
        code: "9782070408483",
        author: "Alexandre Dumas",
        format: "Papier, Epub",
        description: "L'histoire d'une vengeance épique et de la recherche de la justice.",
        price: "15,00 €",
        image: "assets/Le Comte de Monte-Cristo.jpg"
    },
    {
        title: "Le Rouge et le Noir",
        code: "9782070408476",
        author: "Stendhal",
        format: "Papier, Epub",
        description: "L'ascension sociale d'un jeune homme ambitieux dans la France du XIXe siècle.",
        price: "11,50 €",
        image: "assets/Le Rouge et le Noir.jpg"
    },
    {
        title: "La Nuit des temps",
        code: "9782253002008",
        author: "René Barjavel",
        format: "Papier, Epub",
        description: "Un récit de science-fiction où un groupe d'hommes découvre un homme et une femme congelés depuis des millénaires.",
        price: "18,00 €",
        image: "assets/ La Nuit des temps.jpg"
    },
    {
        title: "La Faim du tigre",
        code: "9782070368220",
        author: "René Barjavel",
        format: "Papier, Epub",
        description: "Un essai sur la condition humaine et la recherche de sens.",
        price: "15,00 €",
        image: "assets/ La Faim du tigre.jpg"
    },
    {
        title: "Humus",
        code: "9782742790483",
        author: "Gaspard Koenig",
        format: "Papier, Epub",
        description: "Une réflexion sur la nature et notre place dans l'écosystème.",
        price: "18,00 €",
        image: "assets/Humus.jpg"
    },
    {
        title: "Lait Cru",
        code: "9782848603947",
        author: "Steve Poutré",
        format: "Papier, Epub",
        description: "Un voyage au cœur des produits laitiers et de leur production.",
        price: "22,00 €",
        image: "assets/Lait Cru.webp"
    }
];

const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

const book = books.find(b => b.code === bookId);

if (book) {
    document.getElementById('book-details').innerHTML = `
        <div class="image-box">
            <img src="${book.image}" alt="${book.title}" class="product-image">
        </div>
        <div class="text-box">
            <h2>${book.title}</h2>
            <p><strong>Auteur :</strong> ${book.author}</p>
            <p><strong>Code produit :</strong> ${book.code}</p>
            <p><strong>Format :</strong> ${book.format}</p>
            <p><strong>Description :</strong> ${book.description}</p>
            <p><strong>Prix :</strong> ${book.price}</p>
        </div>
    `;
} else {
    document.getElementById('book-details').innerHTML = '<p>Livre non trouvé.</p>';
}