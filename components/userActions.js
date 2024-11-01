import "./userActions.css"
import { actionButton } from "./actionButton.js"
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

	const buttonOne = actionButton(edit, "warning-btn", buttonOneFn)
	const buttonTwo = actionButton(trash, "danger-btn", buttonTwoFn)

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

    function buttonOneFn() {
        console.log("Edit button clicked")
    }

    function buttonTwoFn() {
        console.log("Delete button clicked")
    }
	return actionsContainer
}