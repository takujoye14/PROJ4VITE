// components/usersActions.js
import "./userActions.css";
import { actionButton } from "./actionButton.js";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";
import { formComp } from "./formComp.js";
import { deleteFormComp } from "./formComp.js"; // Import the delete form component
import {init} from "../main"

export const usersActions = () => {
	const actionsContainer = document.createElement("div");
	actionsContainer.classList.add("actions-container");

	const buttonOne = actionButton(edit, "warning-btn", buttonOneFn);
	const buttonTwo = actionButton(trash, "danger-btn", buttonTwoFn);

	actionsContainer.appendChild(buttonOne);
	actionsContainer.appendChild(buttonTwo);

	return actionsContainer;

};

function buttonOneFn(e) {
	const userId = e.target.parentElement.parentElement.getAttribute("userId");
	const firstName = e.target.parentElement.parentElement.getAttribute("firstName");
	const lastName = e.target.parentElement.parentElement.getAttribute("lastName");

	if (!userId || !firstName || !lastName) {
		console.error("User ID, first name, or last name is missing");
		return;
	}

	document.querySelector(".modal-overlay").classList.toggle("show");
	document.querySelector(".modal-container").innerHTML = "";
	document.querySelector(".modal-container").appendChild(formComp(firstName, lastName, userId));
}

function buttonTwoFn(e) {
	const userId = e.target.parentElement.parentElement.getAttribute("userId");
	const firstName = e.target.parentElement.parentElement.getAttribute("firstName");
	const lastName = e.target.parentElement.parentElement.getAttribute("lastName");



	if (!userId || !firstName || !lastName) {
		console.error("User ID, first name, or last name is missing");
		return;
	}

	document.querySelector(".modal-overlay").classList.toggle("show");
	document.querySelector(".modal-container").innerHTML = "";
	document.querySelector(".modal-container").appendChild(deleteFormComp(firstName, lastName, userId));

}
