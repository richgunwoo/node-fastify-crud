const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users')

const User = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },                        
    },
}

const getUsersOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                users: User
            }
        }
    },
    handler: getUsers,
}

const getUserOptions = {
    schema: {
        response: {
            200: User
        },
        querystring: {
            id: { type: 'string' },
        }
    },
    handler: getUser,
}

const createUserOptions = {
    schema: {
        response: {
            201: User
        },
        body: {
            type: 'object',
            required: ['name', 'email'],
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },                        
            },
        },
    },
    handler: createUser,
}

const updateUserOptions = {
    schema: {
        response: {
            200: User
        },
        body: {
            type: 'object',
            required: ['name', 'email'],
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },                        
            },
        },
        querystring: {
            id: { type: 'string' },
        }
    },
    handler: updateUser,
}

const deleteUserOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' },
                }
            }
        },
        querystring: {
            id: { type: 'string' },
        }
    },
    handler: deleteUser,
}

function userRoutes(fastify, opts, done) {

    fastify.get('/users', getUsersOptions)
    fastify.get('/users/:id', getUserOptions)
    fastify.post('/users', createUserOptions)
    fastify.put('/users/:id', updateUserOptions)
    fastify.delete('/users/:id', deleteUserOptions)

    done()
}

module.exports = userRoutes
