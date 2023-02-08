<template>
	<!-- About section -->
	<section id="about" class="section mt-3">
		<div class="container mt-5">
			<div class="row text-center text-md-left">
				<div class="col-md-3">
					<img :src="github.avatar_url" alt="" class="img-thumbnail mb-4">
				</div>
				<div class="pl-md-4 col-md-9">
					<h6 class="title">{{user.name}}</h6>
					<p class="subtitle">Front End Developer</p>
					<p>{{user.about}}</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam rerum deserunt autem laborum maxime temporibus quaerat possimus dolorem nihil expedita iure fugit quas ratione animi nostrum, at veritatis est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa similique officia iste excepturi ipsam dignissimos veniam modi ab saepe impedit.</p>
					<a href="http://localhost:5000/download/deneme" class="btn btn-primary rounded mt-3">DOWNLOAD CV</a> <!-- apiye istek --> 
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	export default{
		props:["user","github"]
	}
</script>