const form = document.querySelector('.container form');
const email = document.querySelector('.container form input[type=email]');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let emailValue = email.value;
	
	// console.log(email.value);
	if (validateEmail(emailValue)) {
		form.classList.remove('error');
		sendEmail(email.value);
		form.classList.add('errorr');
	} else {
		form.classList.add('error');
	}
});
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function sendEmail(email) {
		  
	Email.send({
		Host : "smtp.gmail.com",
		Username: "avtech.sitemail@gmail.com",
		Password : "niuvoknyjmuxcwpm",
		To: "avtech71120@gmail.com",
		From: "avtech.sitemail@gmail.com",
		Subject: `You have new visitor at AV Tech's website`,
		Body: `Email: ${email} `,
	}).then((emaihl) => {
	//    console.log(email);
	   alert("Thanks for subscribing to AV Tech !")
	   replyToUser (email)})
 }

 function replyToUser (email){
   Email.send({
	   Host : "smtp.gmail.com",
	   Username: "avtech.sitemail@gmail.com",
	   Password : "niuvoknyjmuxcwpm",
	   To: email,
	   From: "avtech.sitemail@gmail.com",
	   Subject: `Thanks for subscribing to AV Tech `,
	   Body: `Hi, <br/> <br/>

Thank you for subscribing to our firm. <br/> <br/>
Want to get started on a custom build? Let us know what you have in mind and we'll be in touch soon. <br/> <br/>

We have a combined our years of experience in the industry so you will be receiving only the best deals in town.<br/> <br/>

If you have any questions or comments about the content you’re receiving please email back and we will respond to your inquiry promptly.<br/> <br/>

Sincerely,<br/> <br/>

Team AVTech
		 `,
   })
 }

