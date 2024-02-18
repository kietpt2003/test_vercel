import dotenv from 'dotenv';
import { configENV } from '../config/configENV.js';
import express from 'express';
import { configLog } from '../config/configLogServer.js';
import { configStaticFiles } from '../config/configStaticFiles.js';
import { configBodyParse } from '../config/configBodyParse.js';
import { configCORS } from '../config/configCORS.js';
import { MaterialRouter } from '../routes/MaterialAPI.js';
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
