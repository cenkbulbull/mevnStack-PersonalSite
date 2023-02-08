<template>
	<!-- Page navigation -->
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
		<div class="container">
			<a class="navbar-brand" href="#"><img src="../assets/imgs/logo.svg" alt=""></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto align-items-center">
					<li class="nav-item">
						<a class="nav-link" href="#home" v-smooth-scroll>Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#about" v-smooth-scroll>About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#service" v-smooth-scroll>Service</a>
					</li> 
					<li class="nav-item">
						<a class="nav-link" href="#skills" v-smooth-scroll>Skills</a>
					</li>                  
					<li class="nav-item">
						<a class="nav-link" href="#contact" v-smooth-scroll>Contact</a>
					</li>
					<li class="nav-item">
						<a class="- btn btn-primary rounded ml-4" :href="user.socials.linkedin" target="_blank">Follow me</a>
					</li>
				</ul>
			</div>
		</div>          
	</nav>
	<!-- End of page navibation -->
</template>
<script>
	export default{
		props:["user"]
	}
</script>
<style scoped>
	.nav-item .nav-link:hover{
		color: #FF7A57 !important;
	}
</style>