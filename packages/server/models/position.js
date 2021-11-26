const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const Schema = mongoose.Schema;
/*
const positionId = function(portfolio, protocol, asset){
    return new ObjectId();
}
*/

const positionSchema = new Schema({
  _id: {
    type: ObjectId,
    default: function() { return ObjectId(); }
  },
  portfolio: {
    type: String,
    required: true
  },
  protocol: {
    type: String,
    required: true
  },
  asset: {
    type: String,
    required: true
  },
  assetName: {
    type: String
  },
  assetType: {
    type: String,
    enum: ['token', 'pool']
  }
}
);

module.exports = mongoose.model('positions', positionSchema);
