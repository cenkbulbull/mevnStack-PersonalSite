import mongoose from "mongoose"

const userSchema = mongoose.Schema({
	username:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	about:{
		type:String,
		required:true
	},
	image:{
		type:String,
		required:true
	},
	contact:{
		location:{
			type:String,
		},
		tel:{
			type:String,
		},
		email:{
			type:String,
		}
	},
	service:[
		{
			name:{
				type:String,
				required:true
			},
			icon:{
				type:String,
				required:true
			}
		}
	],
	skills:[
		{
			name:{
				type:String,
				required:true
			},
			percent:{
				type:Number,
				required:true
			}

		}
	],
	socials:{
		github:{
			type:String,
		},
		instagram:{
			type:String,
		},
		google:{
			type:String,
		},
		linkedin:{
			type:String,
		}
	},


})

const User = mongoose.model("user",userSchema) //model ismini post verdik, mongo db sonuna s takısı ekleyerek koleksiyon haline getiriyor

export default User