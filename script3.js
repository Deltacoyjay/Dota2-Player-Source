let parameters = new URLSearchParams(window.location.search)

let heroName = parameters.get("heroName")

let description = parameters.get("heroDescription")

let descriptionElement = document.getElementById("heroDetails")

descriptionElement.innerText = description

let skillsImage =parameters.get("heroSkillsImageUrl")

let imageElement = document.getElementById("heroSkillImage")
imageElement.setAttribute(
    "src", `${skillsImage}`
);
