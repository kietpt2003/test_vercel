import dotenv from 'dotenv';
import { configENV } from '../config/configENV.js';
import express from 'express';
import { configLog } from '../config/configLogServer.js';
import { configStaticFiles } from '../config/configStaticFiles.js';
// import { UserRouter } from '../routes/user/UserAPI';
// import { AccountRouter } from '../routes/account/AccountAPI';
// import { ClientRouter } from '../routes/client/ClientAPI';
// import { ContractRouter } from '../routes/contract/ContractAPI';
// import { DesignRouter } from '../routes/design/DesignAPI';
import { configBodyParse } from '../config/configBodyParse.js';
import { configCORS } from '../config/configCORS.js';
// import { ColorRouter } from '../routes/color/ColorAPI';
import { MaterialRouter } from '../routes/MaterialAPI.js';
// import { FurnitureRouter } from '../routes/furniture/FurnitureAPI';
// import { ClassificationRouter } from '../routes/classification/ClassificationAPI';
const app = express();

//Config .env
configENV(dotenv);

//Config check log server
configLog(app);

//Config CORS
configCORS(app);

//Config body parser
configBodyParse(app);

//Config static files
configStaticFiles(app);

//User routes
// UserRouter(app);

//Account routes
// AccountRouter(app);

//Client routes
// ClientRouter(app);

//Contract routes
// ContractRouter(app);

//Design routes
// DesignRouter(app);

//Color routes
// ColorRouter(app);

//Material routes
MaterialRouter(app);
app.get('/', (req, res) => {
    res.end(`Hello kiet`);
});

//Furniture routes
// FurnitureRouter(app);

//Classification routes
// ClassificationRouter(app);

const port = process.env.PORT || 8888;

app.listen(port, () => {
    console.log('Server is running on port: ', port);
})

module.exports = app;