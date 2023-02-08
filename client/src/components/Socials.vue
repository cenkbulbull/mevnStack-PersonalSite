<template>
	<div style="display: flex;">
		<a class="social-item" :href="socials.instagram" target="_blank"><i class="ti-instagram"></i></a>
		<a class="social-item" :href="socials.google" target="_blank"><i class="ti-google"></i></a>
		<a class="social-item" :href="socials.github" target="_blank"><i class="ti-github"></i></a>
		<a class="social-item" :href="socials.linkedin" target="_blank"><i class="ti-linkedin"></i></a>
	</div>
</template>
<script>
	export default{
		props:["socials"]
	}
</script>