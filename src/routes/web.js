const express = require('express')
const router = express.Router()

//Khai báo route
router.get('/', (req, res) => {
    res.send('Helđâlo World!')
  })
  
  router.get('/abd', (req, res) => {
      // res.send('Trần Minh Hiếu!')
      res.render('sample.ejs')
    })

module.exports = router
// Export default