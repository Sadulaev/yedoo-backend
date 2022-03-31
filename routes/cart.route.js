const { cartController } = require('../controllers/cart.controller')
const { Router } = require('express')

const router = Router()

router.get('/', cartController.getCart)
router.post('/', cartController.createCart)
router.delete('/:id', cartController.deleteCart)

module.exports = router