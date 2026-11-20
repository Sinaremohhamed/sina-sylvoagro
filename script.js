
const formulaire = document.getElementById("contactForm");

if (formulaire) {
    formulaire.addEventListener("submit", function(e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const telephone = document.getElementById("telephone").value;
        const sujet = document.getElementById("sujet").value;
        const message = document.getElementById("message").value;

        const texte =
            "Bonjour SINA SYLVOAGRO.SARL\n\n" +
            "Nom : " + nom + "\n" +
            "Téléphone : " + telephone + "\n" +
            "Sujet : " + sujet + "\n" +
            "Message : " + message;

        const lien =
            "https://wa.me/22675740777?text=" +
            encodeURIComponent(texte);

        window.open(lien, "_blank");
    });
}

