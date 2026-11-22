
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



/* MENU MOBILE DE LA PAGE D'ACCUEIL */

const menuToggle = document.getElementById("menuToggle");
const menuPrincipal = document.getElementById("menuPrincipal");

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", function() {
        const ouvert = menuPrincipal.classList.toggle("ouvert");

        menuToggle.setAttribute("aria-expanded", ouvert);
        menuToggle.setAttribute(
            "aria-label",
            ouvert ? "Fermer le menu" : "Ouvrir le menu"
        );
    });

    menuPrincipal.querySelectorAll("a").forEach(function(lien) {
        lien.addEventListener("click", function() {
            menuPrincipal.classList.remove("ouvert");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        });
    });
}
