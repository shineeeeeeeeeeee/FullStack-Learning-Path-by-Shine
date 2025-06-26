const {Schema,model} = require("mongoose");

// created schema
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 50
    },
    age: {
        type: Number,
        require: true
    },
    enrollment: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// created model using schema
const userModel = model("user", userSchema)

module.exports = userModel