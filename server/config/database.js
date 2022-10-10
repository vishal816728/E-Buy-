const mongoose=require('mongoose')

async function init(){
    try {
        const con=await mongoose.connect(`mongodb+srv://pro:pro@cluster0.xnpljdn.mongodb.net/?retryWrites=true&w=majority`)
        if(con){
            console.log("database is connected "+" "+con.connection.host)
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports=init