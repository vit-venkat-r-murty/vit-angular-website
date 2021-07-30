import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


	constructor() { }

	public sendEmail(e: Event) {
		e.preventDefault();
		emailjs.sendForm('service_0x57b1m', 'template_8yj27fr', e.target as HTMLFormElement, 'user_cE6wxEo2qBLDryxDA6XIL')
			.then((result: EmailJSResponseStatus) => {
				console.log(result.text);
				Swal.fire(
					'Email Sent!',
					'Will get back to you shortly!',
					'success'
				);
				(e.target as HTMLFormElement).reset();
			}, (error) => {
				console.log(error.text);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
				})
			});
	}

	ngOnInit(): void {
	}
}
