const Person = require('../models/Person.js')

const router = require('express').Router()

router.post('/', async (request, response) => {

    const {name, salary, approved} = request.body

    if(!name){
        response.status(422).json({error: 'o nome é obrigatório!'})
        return
    }

    const person = {
        name,
        salary,
        approved,
    }

    try {

        await Person.create(person)

        response.status(201).json({massege: 'insirida no sistema com sucesso'})

    } catch(error) {
        console.log(error)
        response.status(500).json({error: error.message})
    }

})

router.get('/', async (__, response)=> {

    try{
        
        const people = await Person.find()

        response.status(200).json(people)

    }catch(error){
        response.status(500).json({error: error.message})
    }

})

router.get('/:id', async (request, response) =>{

    const id = request.params.id
    // console.log(id)

    try{

        const person = await Person.findById(id)
        
        if(!person){
            response.status(422).json({
                message: 'o usuário não foi encontrado!'
            })
            return
        }

        response.status(200).json(person)

    }catch(error){
        response.status(500).json({error: error})
    }

})

router.patch('/:id', async (request, response)=>{

    const id = request.params.id

    const {name, salary, approved} = request.body

    const person = {
        name,
        salary,
        approved,
    }

    try{

        const updateDices =  await Person.updateOne({_id: id}, person)

        response.status(200).json(person)

    } catch(error){
        response.status(500).json({error: error})
    }
})

module.exports = router