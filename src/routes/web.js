const express = require('express')
const {getHomepage, getABD} = require(`../controllers/homeController`)
const router = express.Router()

//Khai báo route
router.get('/', getHomepage)
  
  router.get('/abd', getABD)

module.exports = router
// Export default