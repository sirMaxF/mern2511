import express from 'express';
import { userModel } from '../models/index.js'

export const routerAuth = express.Router();

// регистрация

routerAuth.post('/register', async (req, res) => {
    const newUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    try {
        const user = await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

