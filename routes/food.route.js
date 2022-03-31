const { foodController } = require('../controllers/food.controller')

const { Router } = require('express')

const router = Router()

router.get('/', foodController.getAllFood)
router.post('/', foodController.createFood)
router.delete('/:id', foodController.deleteFood)

module.exports = router;