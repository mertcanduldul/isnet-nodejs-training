const express = require('express');
const app = express();
const session = require('express-session');

const port = 3000;
import path from 'path';
import { homeController } from './controller/homeController'
import { loginController } from './controller/loginController'

//EJS CONFİG
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(session({
    secret: 'bubenimgizlibiranahtarim',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function (req, res) {

    req.session.adiSoyadi = 'MERT CAN DÜLDÜL';
    res.send('Session oluşturuldu.');

});


app.use(homeController);
app.use(loginController);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
