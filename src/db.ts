import { connect, ConnectOptions } from "mongoose";

const dbURL = "mongodb+srv://cluster0.1xb9g.mongodb.net/myFirstDatabase";
const option: ConnectOptions = {user:"a",pass:"a",serverApi:"1"}

const DbConnect = () => {
    connect(dbURL, option)
        .then(() => console.log("Bağlantı Başarılı"))
        .catch(err => console.log("Bağlantı Başarısız", err))
}

export { DbConnect }