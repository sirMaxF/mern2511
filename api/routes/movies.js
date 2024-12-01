import express from 'express';
import { movieModel } from '../models/index.js'
import bcrypt from 'bcrypt'
import { verifyMiddleware } from '../utils/token.js';

const routerMovie = express.Router();

//  создание
routerMovie.post('/', verifyMiddleware, async (req, res) => {
    if (req.user.isAdmin) {
        const createdMovie = new movieModel(req.body);

        try {
            const savedMovie = await createdMovie.save();
            res.status(201).json(savedMovie)
        } catch (error) {
            res.status(500).json(error)
        }

    } else {
        res.status(403).json('Позволено только админу')
    }
})



//обновление

routerMovie.put('/:id', verifyMiddleware, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await movieModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            req.status(200).json(updatedMovie)
        } catch (error) {

        }
    } else {
        res.status(403).json('Позволено только админу')
    }
})