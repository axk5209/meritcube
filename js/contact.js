if ( window.history.replaceState ) {
	window.history.replaceState( null, null, window.location.href );
}

const name = document.getElementById("cf-name")
const email = document.getElementById("cf-email")
const phone = document.getElementById("cf-phone")
const message = document.getElementById("cf-message")
const submitButton = document.getElementById("cf-submit")
const messageBlock = document.getElementById("message-block")

// submitButton.addEventListener("click", submitContactForm);

function submitContactForm (event) {
	event.preventDefault()
	messageBlock.style.display = "none"
	submitButton.innerText = "Sending..."
	submitButton.disabled = true
	const body = `
					<html>
						<span style = "font-size:large;font-weight:bold;">Message</span>
						<br>
						<span style = "font-size:large">${message.value}</span>
						<br>
						<br>
						<br>
						<br>
						<span style = "font-size:medium;font-weight:bold;">Sender Details</span>
						<br>
						<span style = "font-style: italic;font-size:medium">Name: </span>
						<span style = "font-size:medium">${name.value}</span>
						<br>
						<span style = "font-style: italic;font-size:medium">Email: </span>
						<span style = "font-size:medium">${email.value}</span>
						<br>
						<span style = "font-style: italic;font-size:medium">Phone Number: </span>
						<span style = "font-size:medium">${phone.value}</span>
						
					</html>`
	console.log(body)

	Email.send({
		Host : "smtp.gmail.com",
		Username : "renalcarelandingpage@gmail.com",
		Password : "Renal@Texas2020",
		To : 'axk45209@gmail.com',
		From : "renalcarelandingpage@gmail.com",
		Subject : "Landing Page Contact Request",
		Body : body
	}).then(() => {
		name.value = ""
		email.value = ""
		phone.value = ""
		message.value = ""
		messageBlock.style.display = "block"
		submitButton.innerText = "Submit"
		submitButton.disabled = false
	}
	);
}