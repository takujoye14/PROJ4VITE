import "./actionButton.css";

/**
 * Creates a button element with an icon and an onClick handler.
 * 
 * @param {string} icon - The URL or path to the icon image.
 * @param {string} className - Additional CSS class for styling the button.
 * @param {function} onClick - The function to call when the button is clicked.
 * @returns {HTMLButtonElement} - The created button element.
 */
export const actionButton = (icon, className, onClick) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn", className);
  const iconImg = new Image();
  iconImg.src = icon;
  iconImg.alt = ""; 
  const deleteImg = new Image();
  deleteImg.src = icon;
  deleteImg.style.pointerEvents = "none";
  buttonElement.appendChild(deleteImg);

  buttonElement.addEventListener("click", (e) => {
	onClick(e)
  })

  return buttonElement;
};
