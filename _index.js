import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import Promise from 'es6-promise';
import Surveytics from './routes/surveytics';


var app = express();
app.server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json({
    limit : '100kb'
}));

Surveytics(app);

app.server.listen(process.env.PORT || 8000);
console.log(`surveytics api is up on ${app.server.address().port}`);