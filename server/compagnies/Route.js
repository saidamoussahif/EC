const express = require ('express')
const router = express.Router()
const {
    Register,
    Login,
    getCompanies
     } = require('../compagnies/Controller')

    // const {protect} =  require('../middleware/authMiddleware')

router.post('/register',Register)
router.post('/login', Login)
router.get('/getAll', getCompanies)


module.exports= router


