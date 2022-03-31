const { cafeController } = require('../controllers/cafe.controller')
const { Router } = require('express')

const router = Router()

router.get('/', cafeController.getAllCafe)
router.post('/', cafeController.createCafe)
router.delete('/:id', cafeController.deleteCafe)

module.exports = router