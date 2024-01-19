const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String },
    nationality: { type: String },
    phone: { type: String },
    address: { type: String },
    gender: { type: String },
    role: { type: String, required: true },
    degree:{type:String},
    experienceyears:{type:Number},
    experiencemonths:{type:Number},
  },
  {
    timestamps: true,
  }
);

const User = model('Users', usersSchema);

module.exports = User;