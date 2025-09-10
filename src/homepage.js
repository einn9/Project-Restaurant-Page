import pasta from "./pasta.jpg";
import utensils from "./utensils.svg";

function homeContent() {
    const content = document.querySelector("#content");

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("contentHeader");
    contentHeader.textContent = "WELCOME TO MY RESTAURANT!";

    const image = document.createElement("img");
    image.src = pasta;
    image.width = 300; 
    image.height = 200;

    const imageTwo = document.createElement("img");
    imageTwo.src = utensils;
    imageTwo.style.width = "200px";
    imageTwo.style.height = "auto"; 


    const contentP = document.createElement("p");
    contentP.classList.add("contentHeaderP");
    contentP.textContent = "Welcome to my restaurant. I hope you enjoy good food, because today, you will be served some good food, bro.";


    const contentH2 = document.createElement("h2");
    contentH2.classList.add("contentH2");
    contentH2.textContent = "SUP BRAH.yo";

    content.append(contentHeader, image, imageTwo, contentP, contentH2);
}

export { homeContent };