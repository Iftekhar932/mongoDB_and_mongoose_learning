const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({ street: String, city: String });

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 13,
    max: 18,
    validate: {
      validator: (v) => v % 2 === 0, // custom validator function
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: { type: String, lowercase: true, required: true },
  createdAt: {
    type: Date,
    default: () => Date.now(), // that way it'll keep updating this date
    // default:new Date() // that way it returns static date
    immutable: true, // won't let anyone change this value
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(), // that way it'll keep updating this date
    // default:new Date() // that way it returns static date
  },
  bestFriend: mongoose.SchemaTypes.ObjectId, // this field is a reference to another object id
  hobbies: [], // hobbies:[String] - this would be an array of strings
  address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
