let parameters = new URLSearchParams(window.location.search)

let heroName = parameters.get("heroName")

let details = parameters.get("heroDetails")

let newP = document.createElement("p")
alert(heroName)
newP.innerHTML = `fgf`

let mainHero = document.getElementById("mainDiv")
mainHero.appendchild(newP)


