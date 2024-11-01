import { cardComponent } from '../components/cardComponent.js'
import { cardImage } from "../components/cardImage"
import { usersData } from "../components/usersData"
import { usersActions } from "../components/userActions"

export function handleData(usersArray) {
	usersArray.forEach((user) => {
		const cardArticle = cardComponent()
		cardArticle.appendChild(cardImage())
		cardArticle.appendChild(usersData())
		cardArticle.appendChild(usersActions())

		app.appendChild(cardArticle)
	})
}

const imageOne= cardComponent()
imageOne.append(cardImage())
imageOne.append(usersData())
imageOne.append(usersActions())


app.appendChild( imageOne )