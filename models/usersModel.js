const { string, required } = require("joi")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: string,
        required: [true, "Email is required"],
        trim: true,
        unique: [true, "Email must be unique!"],
        minLength: [5, "Email must have at least 5 characters"],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "password must be proided!"],
        trim: true,
        select: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
        select: false
    },
    verificationCodeValidation: {
        type: Number,
        select: false
    },
    forgotPasswordCode: {
        type: String,
        select: false
    },
    forgotPasswordCodeValidation: {
        type: Number,
        select: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)