export const cardImage = () => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add ("card-image")

    const img = new Image()
    img.src = "https://media.istockphoto.com/id/1164822188/fr/vectoriel/image-de-profil-davatar-m%C3%A2le.jpg?s=612x612&w=0&k=20&c=4CIn9LIrbgjAijantXniJYHjv2zSneUxFh6KkSqXa-Y="
    img.setAttribute("alt", "avatar image")
    cardDiv.appendChild(img)

    return cardDiv
}