import express from "express"

import mongoose from "mongoose"
import User from "../db/user.js"

const router = express.Router()

//aşağıdakilerin karşılığı localost:5000 değil, localhost:5000/user çünkü indexde user olarak verdik

router.get("/",async(req,res)=>{
	try{
		const user = await User.find()
		res.json(user)
	}
	catch(error){
		console.log(error)
	}
})

/*router.get("/:id",async(req,res)=>{
	console.log("tekil get isteği")
})*/

/*router.post("/",async(req,res)=>{
	try{
		const user = req.body
		const createdUser = await User.create(user)
		res.status(201).json(createdUser) //201 kodu yeni bir şey oluşturulduğunu söyler
	}
	catch(error){
		console.log(error)
	}
})*/

/*router.put("/:id",async(req,res)=>{
	console.log("update put isteği")
})*/

router.put("/",async(req,res)=>{
	try{
		const {username,password,name,about,contact,service,skills,socials,_id} = req.body

		if (!mongoose.Types.ObjectId.isValid(_id)) {  //eğer böyle bir id yoksa 404 hatası göndertiyoruz
			return res.status(404).send("post bulunamadi")
		}

		const updatedUser = {username,password,name,about,contact,service,skills,socials,_id}
		await User.findByIdAndUpdate(_id,updatedUser,{new:true}) //new:true parametresi, gösterilecek verinin son güncellenmiş hali olması için verilir 

		res.json(updatedUser)
		//console.log(req.body)
		console.log(updatedUser)
	}
	catch(error){
		console.log(error)
	}
})



/*router.delete("/:id",async(req,res)=>{
	console.log("delete isteği")
})*/

export default router