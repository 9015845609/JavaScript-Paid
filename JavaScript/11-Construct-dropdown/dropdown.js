const technologies = ["html", "css", "javaScript", "AJAX", "Bootstrap", "React JS"];

const prepareTechDropdown = () => {
    const selectTag = document.querySelector("#form-select");
    let optionTag = "";
    for (let tech of technologies) {
        optionTag += `<option value="${tech}">${tech.toUpperCase()}</option>`
    }
    selectTag.innerHTML = optionTag;
};
prepareTechDropdown();