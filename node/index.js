const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
const crypto = require('crypto')
const mongoose = require('mongoose')
const Passcode = require('./caseShopdb/mongodb')
const { send } = require('process')

const dbURI = 'mongodb+srv://realeed:covid.3355@caseshop.e4xmp.mongodb.net/caseShop?retryWrites=true&w=majority'

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('../'))
app.use(express.static('../Admin'))
app.use(express.static('../Careers'))

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
app.get('/addproduct', (req, res) => {
    res.send('You cannot reach this page!')
})
app.post('/addproduct', urlencodedParser, (req, res) => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => {
            console.log('Connected to db')
            let hash = crypto.createHash('sha256').update(req.body.passcode).digest('hex')
            Passcode.find()
            .then(result => {
                const storedHash = result[0].passcode
                if (hash == storedHash) {
                    res.sendFile('C:/Soft/caseShop/Admin/addproduct.html')
                    console.log('Accessed to the admin page!')
                } else {
                    res.send('Incorrect passcode!')
                    console.log('Failed to access to the admin page!')
                }
            })
            .catch(err => console.log(err))
        })
        .catch(err => {
            res.send('Error: 404')
            console.log(err)
        })
})
app.get('/career', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Careers/jobs.html')
})

app.listen(port, () => console.log(`Listening to port... ${port}`))


