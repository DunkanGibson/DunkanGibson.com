hello_in_languages = [
    "Hello",             // English
    "Bonjour",           // French
    "Hola",              // Spanish
    "Ciao",              // Italian
    "Guten Tag",         // German
    "Konnichiwa",        // Japanese
    "Namaste",           // Hindi
    "Merhaba",           // Turkish
    "Szia",              // Hungarian
    "Hallo",             // Dutch
    "Hej",               // Swedish
    "Ahoj",              // Czech
    "Annyeonghaseyo",    // Korean
    "Salut",             // Romanian
    "Sawatdi",           // Thai
    "Marhaba",           // Arabic
    "Shalom",            // Hebrew
    "Zdravo",            // Croatian
    "Jambo",             // Swahili
    "Nǐ hǎo",            // Mandarin Chinese
    "Salam",             // Persian
    "Sveiki",            // Latvian
    "Tervetuloa",        // Finnish
    "Dia duit",          // Irish
    "Olá",               // Portuguese
    "Halo",              // Indonesian
    "Privet",            // Russian
    "Sannu",             // Hausa
    "Selamat pagi"       // Malay
]

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const changeWord = () => {
    const changeingWord = document.querySelector("#hello")
    if (isInViewport(changeingWord)) {
        changeingWord.innerHTML = hello_in_languages[Math.floor(Math.random() * hello_in_languages.length)]
    }
}

setInterval(() =>
    changeWord()
, 2500);