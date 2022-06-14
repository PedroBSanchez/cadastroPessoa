const mongoose = require("mongoose");

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@db-api-users.kaxan.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
        if (error) {
            return console.log("Ocorreu um erro ao se conectar com o banco" + error);
        }
        console.log("Conexão com o banco realizada com sucesso");
    }
    )
}

module.exports = connectToDataBase;