const linkAbout = document.getElementById("link-about");
const logo = document.getElementById("logo");
const linkContact = document.getElementById("link-contact");
const mainContent = document.querySelector(".main-content");
const mailContent = document.querySelector(".mail-content");
const aboutContent = document.querySelector(".about-content");

linkAbout.addEventListener("click", function (event) {
    event.preventDefault();
    mainContent.style.display = "none";
    aboutContent.style.display = "inherit";
    mailContent.style.display = "none";
});


logo.addEventListener("click", function (event) {
    event.preventDefault();
    mainContent.style.display = "inherit";
    aboutContent.style.display = "none";
    mailContent.style.display = "none";
});


linkContact.addEventListener("click", function (event) {
    event.preventDefault();
    mainContent.style.display = "none";
    mailContent.style.display = "inherit";
    aboutContent.style.display = "none";
});
