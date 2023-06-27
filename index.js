const hello_in_languages = [
  "Hello", // English
  "Bonjour", // French
  "Hola", // Spanish
  "Ciao", // Italian
  "Guten Tag", // German
  "Namaste", // Hindi
  "Merhaba", // Turkish
  "Szia", // Hungarian
  "Hallo", // Dutch
  "Hej", // Swedish
  "Ahoj", // Czech
  "Salut", // Romanian
  "Sawatdi", // Thai
  "Marhaba", // Arabic
  "Shalom", // Hebrew
  "Zdravo", // Croatian
  "Jambo", // Swahili
  "Nǐ hǎo", // Mandarin Chinese
  "Salam", // Persian
  "Sveiki", // Latvian
  "Dia duit", // Irish
  "Olá", // Portuguese
  "Halo", // Indonesian
  "Privet", // Russian
  "Sannu", // Hausa
];

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const changeWord = () => {
  const changeingWord = document.querySelector("#hello");
  if (isInViewport(changeingWord)) {
    changeingWord.innerHTML =
      hello_in_languages[Math.round(Math.random() * hello_in_languages.length)];
  }
};

setInterval(() => changeWord(), 4000);

let contactName = document.querySelector(".contact-name")
let contactEmail = document.querySelector(".contact-email")
let contactMessage = document.querySelector(".contact-message")

//TODO need to check validation of inputs


document.querySelector(".submit-message").addEventListener("click", () => {
  fetch("https://api.airtable.com/v0/appjLtv0mfJ52sPCj/tblU6Bk6nwnNCzJyM", {
    method: "POST",
    body: JSON.stringify({
      records: [
        {
          fields: {
            name: contactName.value,
            email: contactEmail.value,
            message: contactMessage.value,
          },
        },
      ],
    }),
    headers: {
      "Content-type": "application/json",
      "Authorization":"Bearer patcShrM4ZRngO9Yv.c499a926b1db4f9e8705db2083ea51ca31996a7c3ab91d5c7f173a9ab761fc2f",
    },
  })
    .then((response) => response.json())
    .then((json) => alert("Message sent!"));
});

// resetForm = () => {
//   contactEmail.value = "";
//   contactName.value = "";
//   contactMessage.value = "";
// }

