import express from "express"

const download = express.Router()

//aşağıdakilerin karşılığı localost:5000 değil, localhost:5000/download çünkü indexde user olarak verdik

download.get("/:id",async(req,res)=>{
	try{
		res.download("../client/src/assets/pdf/"+req.params.id+".pdf")
	}
	catch(error){
		console.log(error)
	}
})


export default download