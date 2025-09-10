function menuContent () {
    const content = document.querySelector("#content");

    const postWipeContent = document.createElement("h1");
    postWipeContent.classList.add("postWipe");
    postWipeContent.textContent = "New contact just dropped";

    content.append(postWipeContent);
}
export { menuContent };
