const express = require('express');
const mongoose = require('mongoose');
const user = require('../models/userModel.cjs'); // Make sure to include `.cjs`

const router = express.Router();

router.post('/add-user', async (req, res) => {
    try {
        const { name, age, email, createdAt } = req.body;
        const data = new user({ name, age, email, createdAt });
        const myuser = await data.save();
        res.status(201).json(myuser);
    } catch (err) {
        res.status(400).json(`error : ${err}`);
    }
});

module.exports = router;
