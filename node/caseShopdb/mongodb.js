const mongoose = require('mongoose')
const Schema = mongoose.Schema

const caseSchema = new Schema(
    {
        passcode: {
            type: String,
            required: true
        }
    }
)

const Passcode = mongoose.model('Passcode', caseSchema)

module.exports = Passcode