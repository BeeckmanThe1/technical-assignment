import express from 'express';
import routing from './routes/index.jsx';

const app = express();
const port = process.env.PORT;

const envPrefix = process.env.ENV === 'development' ? 'dev' : 'prod';

app.use(express.static(`./client/assets`));
app.use(express.static(`./builds/${envPrefix}.build`));

routing.init(app);


app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listening on port ${port}.`);
    }
});
