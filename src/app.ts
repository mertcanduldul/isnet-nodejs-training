const express = require('express');
const app = express();
import path from 'path';
import { dashboardController } from './controller/dashboardController';
import { homeController } from './controller/homeController'
import { singupController } from './controller/singupController'
import { loginController } from './controller/loginController'
import { DbConnect } from './db'

//EJS CONFİG
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(homeController);
app.use(singupController);
app.use(dashboardController)
app.use(loginController)


const PORT = 3000;
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
DbConnect();
