const { v4:uuidv4 } = require('uuid')

let Users = []

const getUsers = (req, reply) => {
    reply.send(Users)
}

const getUser = (req, reply) => {
    const { id } = req.params
    const user = Users.find(user => user.id === id)

    reply.send(user)
}

const createUser = (req, reply) => {
    const { name, email } = req.body
    const user = {
        id: uuidv4(),
        name: name,
        email: email,
    }

    Users = [...Users, user]
    
    reply.code(201).send(user)
}

const updateUser = (req, reply) => {
    const { id } = req.params
    const { name, email } = req.body
    
    Users = Users.map(user => (user.id === id ? {id, name, email} : user))
    user = Users.find(item => item.id === id)

    reply.send(user)
}

const deleteUser = (req, reply) => {
    const { id } = req.params

    Users = Users.filter(user => user.id !== id)
    
    reply.send({message: `User '${id}' has been deleted.`})
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}