import { verifyToken } from '@clerk/nextjs/server'
import mongoose from 'mongoose'
import { unique } from 'next/dist/build/utils'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a username'], //true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please add a username'], //true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a username'], //true,
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User
