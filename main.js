const bodyElement = document.querySelector("body")
const button = document.createElement("button")

button.append("Remove")
bodyElement.append(button)

button.addEventListener("click", function () {
    mainElement.remove()
    console.log('button clicked')
})


const mainElement = document.createElement("main")
bodyElement.append(mainElement)

const imgElement = document.createElement("img")
mainElement.append(imgElement)

imgElement.className = "image"
imgElement.src = "https://www.fridakahlo.org/images/paintings/henry-ford-hospital.jpg"

let anchorElement = document.createElement("a")
anchorElement.href = "https://www.fridakahlo.org/henry-ford-hospital.jsp"
anchorElement.className = "a"
mainElement.append(anchorElement)
anchorElement.append("https://www.fridakahlo.org/henry-ford-hospital.jsp")