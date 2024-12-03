import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { routerAuth, routerMovie, routerUser } from './routes/index.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Успешное подключение к бд'))
    .catch((err) => console.log(err));

const app = express();
app.use(express.json())

app.use('/api/auth/', routerAuth);
app.use('/api/users/', routerUser)
app.use('/api/movie/', routerMovie)

app.listen('8800', () => {
    console.log('Получилось')
})