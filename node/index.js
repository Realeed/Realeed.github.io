const express = require('express')
const app = express()
const port = 80

app.use(express.static('../'))
app.get('/admin', (req, res) => {
    res.sendFile('C:/Soft/caseShop/Admin/admin.html')
})
app.get(('/iphone'), (req, res) => {
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

app.listen(port, () => console.log(`Listening to port: ${port}`))