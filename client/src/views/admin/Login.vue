<template>
	<div class="container mt-5">
		<form @submit.prevent="login" class="w-50 mx-auto">
			<div class="form-outline mb-4">
				<label class="form-label" for="form2Example1">Username</label>
				<input v-model="username" type="text" id="form2Example1" class="form-control" />
			</div>

			<div class="form-outline mb-4">
				<label class="form-label" for="form2Example2">Password</label>
				<input v-model="password" type="password" id="form2Example2" class="form-control" />
			</div>

			<button type="submit" class="btn btn-primary btn-block mb-4">Login</button>

		</form>
	</div>
</template>
<script>
	import {ref} from "vue"
	import {useRouter} from "vue-router"
	export default{
		setup(){
			const username = ref("")
			const password = ref("")

			const router = useRouter()

			const API_URL = "http://localhost:5000/user"

			const login = async()=>{

				const response = await fetch(API_URL)
				const json = await response.json()

				const usernameDb = json[0].username
				const passwordDb = json[0].password

				if (username.value==usernameDb && password.value==passwordDb) {
					localStorage.setItem("user",usernameDb+passwordDb)
					if (localStorage.getItem("user")==usernameDb+passwordDb) {
						router.push({name:"update"})
					}
				}
				else{
					alert("hatalı giriş")
				}
			}

			return {username,password,login}
		}
	}
</script>
<style>
	
</style>