const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@users.560rfik.mongodb.net/?retryWrites=true&w=majority&appName=users`);
        console.log("Conectado com sucesso ao banco de dados!");
    }
    catch(error){
        console.log("Erro ao se conectar com o banco de dados", error);
    }
}
module.exports=connectToDataBase;