const userController = require('../controllers/userController')

module.exports = router => {
    router.get('/users', userController)
}
