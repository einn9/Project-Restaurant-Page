function contactContent () {
    const content = document.querySelector("#content");

    const cntContent = document.createElement("h1");
    cntContent.classList.add("contactContent");
    cntContent.textContent = "contact here";

    content.append(cntContent);
}
export { contactContent };
