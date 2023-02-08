<template>
	<button @click="logout" class="btn btn-danger ml-2 mt-2">Çıkış</button>
	<div class="container-fluid mt-3 mb-3">
		<form @submit.prevent="updateUser" enctype='multipart/form-data'>
			<div class="row">
				<div class="col-2">
					<div class="form-group">
						<label>Username</label>
						<input v-model="user.username" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Password</label>
						<input v-model="user.password" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Name</label>
						<input v-model="user.name" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>About</label>
						<textarea v-model="user.about" class="form-control" rows="3"></textarea>
					</div>
					<div class="form-group">
						<label>Github</label>
						<input v-model="user.socials.github" type="text" class="form-control">
						<label>Instagram</label>
						<input v-model="user.socials.instagram" type="text" class="form-control">
						<label>Google</label>
						<input v-model="user.socials.google" type="text" class="form-control">
						<label>Linkedin</label>
						<input v-model="user.socials.linkedin" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Location</label>
						<input v-model="user.contact.location" type="text" class="form-control">
						<label>Email</label>
						<input v-model="user.contact.email" type="email" class="form-control">
						<label>Tel</label>
						<input v-model="user.contact.tel" type="text" class="form-control">
					</div>
				</div>

				<div class="col-5">
					<div class="row clearfix">
						<div class="col-md-12 column">
							<table class="table table-bordered table-hover" id="tab_logic">
								<thead>
									<tr>
										<th class="text-center">
											#
										</th>
										<th class="text-center">
											Skill
										</th>
										<th class="text-center">
											Percent
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(sk,index) in user.skills" id='addr0'>
										<td>{{index+1}}</td>
										<td>
											<input v-model="sk.name" type="text" class="form-control"/>
										</td>
										<td>
											<input v-model="sk.percent" type="number" class="form-control"/>
										</td>
									</tr>

									<tr id='addr0'>
										<td><button type="button" @click="updateSkills" class="btn btn-primary">Ekle</button></td>
										<td>
											<input v-model="skillsObject.name" type="text" class="form-control"/>
										</td>
										<td>
											<input v-model="skillsObject.percent" type="number" class="form-control"/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div class="col-5">
					<div class="row clearfix">
						<div class="col-md-12 column">
							<table class="table table-bordered table-hover" id="btab_logic">
								<thead>
									<tr>
										<th class="text-center">
											#
										</th>
										<th class="text-center">
											Service
										</th>
										<th class="text-center">
											Icon
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(ser,index) in user.service" id='bddr0'>
										<td>{{index+1}}</td>
										<td>
											<input v-model="ser.name" type="text" class="form-control"/>
										</td>
										<td>
											<input v-model="ser.icon" type="text" class="form-control"/>
										</td>
									</tr>
									<tr id='addr0'>
										<td><button type="button" @click="updateService" class="btn btn-primary">Ekle</button></td>
										<td>
											<input v-model="serviceObject.name" type="text" class="form-control"/>
										</td>
										<td>
											<input v-model="serviceObject.icon" type="text" class="form-control"/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<button type="submit" class="btn btn-primary w-100">Update</button>
		</form>
	</div>
</template>
<script>
	import Swal from 'sweetalert2'
	import {useRouter} from "vue-router"
	import {reactive,ref,onMounted } from "vue"
	export default{
		setup(){

			const API_URL = "http://localhost:5000/user"
			const router = useRouter()

			const user = ref({
				about:"",
				contact:{
					location:"",
					tel:"",
					email:""
				},
				image:"",
				name:"",
				password:"",
				service:[
				{
					name:"",
					icon:""
				}
				],
				skills:[
				{
					name:"",
					percent:""

				}
				],
				socials:{
					github:"",
					instagram:"",
					google:"",
					linkedin:""
				},
				username:""	
			})

			const skillsObject = ref({
				name:"",
				percent:""
			})
			const serviceObject = ref({
				name:"",
				icon:""
			})

			const id = ref("")
			

			onMounted(()=>{
				getUser()
			})

			const getUser = async()=>{

				//kontrol işlemi
				const response = await fetch(API_URL)
				const json = await response.json()

				const usernameDb = json[0].username
				const passwordDb = json[0].password

				if (localStorage.getItem("user")!=usernameDb+passwordDb) {
					router.push({name:"login"})
				}
				//kontrol işlemi

				//console.log(json)
				user.value = json[0]
				id.value = json[0]._id
				//console.log(id.value)
				//console.log(user.value)
			}

			const updateSkills = ()=>{ //eğer bunun butonunu type submit yaparsak , aynı anda genel update işlemi de çalışır ve her tıklamaya komple günceller
				if (skillsObject.value.name!="" && skillsObject.value.percent!="") {
					user.value.skills.push(skillsObject.value) //yeni yetenek eklendi
					skillsObject.value = {
						name:"",
						percent:""
					}
				}
			}

			const updateService = ()=>{
				if (serviceObject.value.name!="" && skillsObject.value.icon!="") {
					user.value.service.push(serviceObject.value) //yeni hizmet eklendi
					serviceObject.value = {
						name:"",
						icon:""
					}
				}
			}

			const updateUser = async()=>{
				const response = await fetch(API_URL,{
					method : "PUT",
					headers:{
						"content-type": "application/json",
					},
					body:JSON.stringify({
						username:user.value.username,
						password:user.value.password,
						name:user.value.name,
						about:user.value.about,
						service:user.value.service,
						skills:(user.value.skills),
						socials:user.value.socials,
						contact:user.value.contact,
						_id:id.value
					})
				})
				//console.log(user)
				//sweetalert
				Swal.fire({
					title: 'GUNCELLENDİ',
					text:   "Site bilgileri güncellendi",
					icon: 'success',
					
				});


			}	

			const logout = ()=>{
				Swal.fire({
					title: 'Çıkış yapmak istiyor musunuz?',
					showDenyButton: true,
					confirmButtonText: 'Çık',
					denyButtonText: 'Kal',
				}).then((result) => {
					if (result.isConfirmed) {
						localStorage.removeItem("user")
						router.push({name:"login"})
					}
				})
				
			}

			return {user,updateUser,logout,skillsObject,updateSkills,serviceObject,updateService}
		}
	}
</script>
<style>
	
</style>