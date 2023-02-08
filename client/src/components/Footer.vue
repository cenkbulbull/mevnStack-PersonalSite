<template>
	<!-- Page Footer -->
	<footer class="page-footer">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-sm-6">
					<p>Copyright {{new Date().getFullYear()}} &copy; <a :href="user.socials.google" target="_blank">{{user.name}}</a></p>
				</div>
				<div class="col-sm-6">
					<div class="socials">
						<Socials :socials="user.socials"/>
					</div>
				</div>
			</div>
		</div>
	</footer> 
	<!-- End of page footer -->
</template>
<script>
	import Socials from "../components/Socials"
	export default{
		components:{
			Socials
		},
		props:["user"]
	}
</script>
<style>
	
</style>