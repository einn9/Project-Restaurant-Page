import contact from "./contact.svg";

function contactContent () {
    const content = document.querySelector("#content");

    const contactHeader = document.createElement("h1");
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = "Contact Us";

    const contactImg = document.createElement("img");
    contactImg.src = contact;
    contactImg.style.width = "200px";
    contactImg.style.height = "auto"; 

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("card");

    const phone = document.createElement("h2");
    phone.classList.add("phone");
    phone.textContent = "Our Phone Number";

    const phoneNumber = document.createElement("p");
    phoneNumber.classList.add("phone-number");
    phoneNumber.textContent = "(819) 923-0184";

    const email = document.createElement("h2");
    email.classList.add("email");
    email.textContent = "E-Mail";

    const emailAddress= document.createElement("p");
    emailAddress.classList.add("email-add");
    emailAddress.textContent = "cantomail@gmail.com";

    const feedback = document.createElement("h2");
    feedback.classList.add("feedback");
    feedback.textContent = "Anonymous Feedback Page";

    const feedbackPage = document.createElement("p");
    feedbackPage.classList.add("feedback-page");
    feedbackPage.textContent = "bit.ly/canto2";

    content.append(contactHeader, contactImg, contactDiv);
    contactDiv.append(phone, phoneNumber, email, emailAddress, feedback, feedbackPage);
}
export { contactContent };
