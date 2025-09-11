import menu from "./menu.svg";

function menuContent () {
    const content = document.querySelector("#content");

    const menuHeader= document.createElement("h1");
    menuHeader.classList.add("menu-header");
    menuHeader.textContent = "Menu";

    const menuImg = document.createElement("img");
    menuImg.src = menu;
    menuImg.style.width = "200px";
    menuImg.style.height = "auto"; 

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("card");


    const starter = document.createElement("h2");
    starter.classList.add("starter");
    starter.textContent = "STARTERS";

    const startChoice = document.createElement("p");
    startChoice.classList.add("menu-starter");
    startChoice.textContent = "Italian Antipasto: $30.00 \r\n";
    startChoice.textContent += "Caesar Salad: $20.00 \r\n";
    startChoice.textContent += "Bruschetta: $15.00";

    const pasta = document.createElement("h2");
    pasta.classList.add("pasta");
    pasta.textContent = "PASTA";

    const pastaChoice = document.createElement("p");
    pastaChoice.classList.add("menu-pasta");
    pastaChoice.textContent = "Fettuccine: $35.00 \r\n";
    pastaChoice.textContent += "Pesto: $24.00 \r\n";
    pastaChoice.textContent += "Carbonara: $28.00";

    const dessert = document.createElement("h2");
    dessert.classList.add("dessert");
    dessert.textContent = "DESSERT";

    const dessertChoice = document.createElement("p");
    dessertChoice.classList.add("menu-dessert");
    dessertChoice.textContent = "Tiramisu: $12.00 \r\n";
    dessertChoice.textContent += "Biscotti: $15.00 \r\n";
    dessertChoice.textContent += "Gelato: $8.00";

    content.append(menuHeader, menuImg, menuDiv);
    menuDiv.append(starter, startChoice, pasta, pastaChoice, dessert, dessertChoice);
}
export { menuContent };
