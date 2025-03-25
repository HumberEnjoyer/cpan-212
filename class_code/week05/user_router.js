import express from 'express';
import User from './user.js';
import bcrypt, { compare } from 'bcryptjs';

const user_router = express.Router();

user_router.post('/register', (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10)
        .then((hashedPassword) => {
            let newUser = new User({
                email: email,
                password: hashedPassword,
            });
            newUser
                .save()
                .then(() => {
                    res.json({ message: 'User created' });
                })
                .catch((error) => {
                    console.log(error);
                    return res.json({ message: 'User not created' });
                });
        })
        .catch((error) => {
            console.log(error);
        });
});


user_router.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email })
        .then((findings) => {
            if (!findings) {
                return res.status(400).json({ message: 'Account not found' });
            }
            bcrypt.compare(password, findings.password)
            .then((compareResults) => {
                if (!compareResults) {
                    return res.json({ message: 'password incorect' });
                }
                return res.json({ message: 'login successful' });
            })

        })
        .catch((error) => {
            console.log(error);
            console.log("could not find account");
        });
});

export default user_router;