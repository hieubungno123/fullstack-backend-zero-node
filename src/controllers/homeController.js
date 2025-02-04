const getHomepage = (req, res) => {
    res.send('Hellloooo')
}


const getABD = (req, res) => {
    // res.send('Trần Minh Hiếu!')
    res.render('sample.ejs')
  }
module.exports = {
    getHomepage,
    getABD
}