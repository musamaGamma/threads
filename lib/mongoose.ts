import  mongoose   from 'mongoose' 

let isConnected=false

export  const   connectToDB=async()=>{
    mongoose.set("strictQuery",true)

    if(!process.env.MONGODB_URI) return console.log("MONGODB URI NOT FOUND ")  
    if(isConnected) return  console.log("Already connected to MongoDB ") 

    try {
        await   mongoose.connect(process.env.MONGODB_URI)
        isConnected =true
        console.log("connected  to  mongodb")
    } catch (error) {
        console.log(error)
    }
}