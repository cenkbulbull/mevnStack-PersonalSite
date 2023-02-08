<template>
	<div class="contact text-left">
		<div class="form">
			<h6 class="subtitle">Available 24/7</h6>
			<h6 class="section-title mb-4">Get In Touch</h6>

			<form ref="form" @submit.prevent="sendEmail">
				<div class="form-group">
					<input type="email" class="form-control" placeholder="Enter email" name="from_email" required>
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Name" name="from_name" required>
				</div>
				<div class="form-group">
					<textarea name="message" id="" cols="30" rows="5" class="form-control" placeholder="Message"></textarea>
				</div>
				<button type="submit" class="btn btn-primary btn-block rounded w-lg">Send Message</button>
			</form>

		</div>
		<div class="contact-infos">
			<div class="item">
				<i class="ti-location-pin"></i>
				<div class="">
					<h5>Location</h5>
					<p>{{user.contact.location}}</p>
				</div>                          
			</div>
			<div class="item">
				<i class="ti-mobile"></i>
				<div>
					<h5>Phone Number</h5>
					<p>{{user.contact.tel}}</p>
				</div>                          
			</div>
			<div class="item">
				<i class="ti-email"></i>
				<div class="mb-0">
					<h5>Email Address</h5>
					<p>{{user.contact.email}}</p>
				</div>
			</div>
		</div>                  
	</div>
</template>
<script>
	import emailjs from '@emailjs/browser';
	import { ref, onMounted } from 'vue'
	export default{
		props:["user"],
		setup(){
			const form = ref(null)
			const service_id = process.env.VUE_APP_SERVICEIDEMAILJS
			const template_id = process.env.VUE_APP_TEMPLATEIDEMAILJS
			const public_key = process.env.VUE_APP_PUBLICKEYEMAILJS

			const sendEmail = ()=>{
				emailjs.sendForm(service_id, template_id , form.value , public_key)
				.then((result) => {
					console.log('SUCCESS!', result.text);
				}, (error) => {
					console.log('FAILED...', error.text);
				});
			}

			return {sendEmail,form}
		}
	}
</script>