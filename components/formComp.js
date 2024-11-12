// formComp.js
import "./formComp.css";
import { inputComp } from "./inputComp";
import { updateUser } from "../utils/updateUser";
import { fetchUsers } from "../utils/fetchData";
import { handleData } from "../utils/handleData";
import { modalComp } from "./modalComp";
import { deleteUser } from "../utils/deleteUser";
import {init} from "../main"


/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} userId
 * @returns {HTMLFormElement}
 */


export const formComp = (firstName, lastName, userId) => {
	const form = document.createElement("form");
	form.classList.add("form");

	form.appendChild(inputComp("text", "firstName", "First Name", firstName));
	form.appendChild(inputComp("text", "lastName", "Last Name", lastName));

	const submitBtn = document.createElement("button");
	submitBtn.setAttribute("type", "submit");
	submitBtn.innerText = "Submit";

	form.addEventListener("submit", async (e) => { 
		e.preventDefault();
		const updatedFirstName = document.getElementById("firstName").value;
		const updatedLastName = document.getElementById("lastName").value;
		const response = await updateUser(updatedFirstName, updatedLastName, userId);
		document.querySelector(".modal-overlay").classList.toggle("show");
		if (response.msg === "User updated") {
			app.innerText = "";
			const usersArray = await fetchUsers();

			if (usersArray.length) handleData(usersArray);
			app.appendChild(modalComp("User updated!"));
			document.querySelector(".modal-container").innerText = `${response.firstName} ${response.lastName}`;
			document.querySelector(".modal-overlay").classList.toggle("show");

			setTimeout(() => {
				document.querySelector(".modal-overlay").classList.toggle("show");
			}, 1500);
		}
	});

	form.appendChild(submitBtn);
	return form;
};

export const deleteFormComp = (firstName, lastName,userId) => {
	const deleteform = document.createElement("form");
	deleteform.classList.add("form");

	const confirmText = document.createElement("p");
	confirmText.innerText = `Are you sure you want to delete ${firstName,lastName}?`;
	deleteform.appendChild(confirmText);

	const deleteBtn = document.createElement("button");
	deleteBtn.setAttribute("type", "submit");
	deleteBtn.innerText = "Delete";
	deleteBtn.classList.add("delete-btn");

	const cancelBtn = document.createElement("button");
	cancelBtn.setAttribute("type", "button");
	cancelBtn.innerText = "Cancel";
	cancelBtn.classList.add("cancel-btn");

	cancelBtn.addEventListener("click", () => {
		document.querySelector(".modal-overlay").classList.toggle("show");
	});

	deleteform.addEventListener("submit", async (e) => {
		e.preventDefault();

		const response = await deleteUser(userId);
		document.querySelector(".modal-overlay").classList.toggle("show");
		console.log(response);
		

		if (response.message === "User deleted !") {
			init()
		}
		
	});

	deleteform.appendChild(deleteBtn);
	deleteform.appendChild(cancelBtn);
	return deleteform;

};
