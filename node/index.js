const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
const crypto = require('crypto')

const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('../'))
app.use(express.static('../Admin'))

app.get('/iphone', (req, res) => {
    res.sendFile('C:/Soft/caseShop/iPhone/iphone.html')
})
app.get('/samsung', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Samsung/samsung.html')
})
app.get('/airpod', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Airpod/airpod.html')
})
app.get('/custom', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Custom/custom.html')
})
app.get('/support', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Support/support.html')
})
app.get('/airpod', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Airpod/airpod.html')
})
app.get('/covid', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Covid/covid.html')
})

app.get('/admin', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Admin/passcode.html')
})
app.post('/addproduct', urlencodedParser, (req, res) => {
    let hash = crypto.createHash('sha256').update(req.body.passcode).digest('hex')
    // if (hash == 'something') {
    //     res.sendFile('C:/Soft/caseShop/Admin/addproduct.html')
    // } else {}
    res.send('Nope!')
    console.log(hash)
})
app.listen(port, () => console.log(`Listening to port: ${port}`))