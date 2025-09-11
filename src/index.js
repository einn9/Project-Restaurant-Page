import "./style.css";
import { homeContent } from "./homepage.js";
import { menuContent } from "./menu.js";
import { contactContent } from "./contact.js";

// Console log test
console.log("test");

//  Select content div 
const content = document.querySelector("#content");


// Working with buttons

const btn = document.querySelectorAll("button");


homeContent();

btn.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.id == "homepage") {
            content.innerHTML = "";
            homeContent();
        }
        else if (button.id == "menu") {
            content.innerHTML = "";
            menuContent();
        }
        else {
            content.innerHTML = "";
            contactContent();
        }
    });
});