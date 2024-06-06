import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors())

app.post('/users', async (req, res) => {
    try {
        const newUser = await prisma.userLufalufa.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: 'Error creating user' });
    }
});

app.get('/users', async (req, res) => {
    try {
        let users = [];
        if (req.query.email || req.query.name || req.query.age) {
            users = await prisma.userLufalufa.findMany({
                where: {
                    email: req.query.email || undefined,
                    name: req.query.name || undefined,
                    age: req.query.age ? parseInt(req.query.age) : undefined
                }
            });
        } else {
            users = await prisma.userLufalufa.findMany();
        }
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: 'Error fetching users' });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await prisma.userLufalufa.update({
            where: { id: parseInt(req.params.id) },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: 'Error updating user' });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        await prisma.userLufalufa.delete({
            where: { id:req.params.id }
        });
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: 'Error deleting user' });
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
