var mongoose = require('mongoose');
var crypto = require('crypto');
var Q = require('q');
var JourneySchema = require('../journey/journeySchema.js');
var User = require('../users/userModel.js');
var Schema = mongoose.Schema;

var TripSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  journeys: [JourneySchema],
  chat_id: { type: Schema.Types.ObjectId }
},
{
  timestamps: true
});

module.exports = mongoose.model('trips', TripSchema);