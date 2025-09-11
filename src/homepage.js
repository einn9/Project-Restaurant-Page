import homepage from "./homepage.svg";

function homeContent() {
    const content = document.querySelector("#content");

    const homeHeader = document.createElement("h1");
    homeHeader.classList.add("home-header");
    homeHeader.textContent = "Homepage";

    const homeImg = document.createElement("img");
    homeImg.src = homepage;
    homeImg.classList.add("home-main-image");
    homeImg.style.width = "200px";
    homeImg.style.height = "auto"; 

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("card");

    const contentTitle = document.createElement("h2");
    contentTitle.classList.add("content-title");
    contentTitle.textContent = "Welcome to Canto";

    const contentInfo = document.createElement("p");
    contentInfo.classList.add("content-info");
    contentInfo.textContent = "Serving the best Italian food in the market at the best price.\r\n";
    contentInfo.textContent += "We are especially proud of our homemade ingredients and the cozy, comfortable experience we provide with every service.\r\n";
    contentInfo.textContent += "Open every hour, every day, at 128 Street, Downtown, DL.";

    content.append(homeHeader, homeImg, contentTitle, homeDiv);
    homeDiv.append(contentTitle, contentInfo);
}

export { homeContent };
