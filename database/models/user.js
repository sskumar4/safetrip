const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  cityName :  {
    type: String,
  },
  // The safety rating score received from amadeus API
  scLgbtq: {
    type: Number
  },
  scMedical: {
    type: Number
  },
  scOverall: {
    type: Number
  },
  scPhysicalHarm: {
    type: Number
  },
  scPoliticalFreedom: {
    type: Number

  },
  scTheft: {
    type: Number
  },
  scWomen: {
    type: Number
  },
  visited: {
    type: Boolean,
    default: false
  },
  visitNotes: {
    type: String
  }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('NO PASSWORD PROVIDED');
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
