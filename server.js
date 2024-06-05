import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// tenho acesso a tudo do express com essa variavel
const app = express()
app.use(express.json())


app.post('/users', async (req, res) => {

    await prisma.userLufalufa.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

/* preciso de:
 tipo da rota/ metodo http
 enderço
 */
app.get('/users', async (req, res) => {

    let users= []
        users = await prisma.userLufalufa.findMany({
            where:{
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })
    if (req.query){

    }else{
        users = await prisma.userLufalufa.findMany()
    }

   
    res.status(200).json(users)

})

app.put('/users/:id', async (req, res) => {

    await prisma.userLufalufa.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.delete('/users/:id', async (req, res) => {

    await prisma.userLufalufa.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "deletado usario" })

})



app.listen(3000)

