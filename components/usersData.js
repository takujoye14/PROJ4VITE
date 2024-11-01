export const usersData = () => {
	const dataContainer = document.createElement("div")
    dataContainer.classList.add("data-container")
    
    const ul = document.createElement('ul')

    for (let index = 0; index < 2; index++) {
        const li = document.createElement('li')
        li.innerText = "Some text"
        ul.appendChild(li)
    } // we add two <li> elements to the ul list

    dataContainer.appendChild(ul)

	return dataContainer
}