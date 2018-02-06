/**
 * Basic function to hide contact form when send button is click
 * A confirmation message is then displayed.
 */
function showConfirmation() {
  document.getElementById('contactForm').style.display = "none";
	document.getElementById('contactAlert').style.display = "block";
}
