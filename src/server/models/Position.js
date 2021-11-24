const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const Schema = mongoose.Schema;
/*
const positionId = function(portfolio, protocol, asset){
    1-12: portfolio + 13-18: protocol + 19-24: asset
    return new ObjectId();
}
*/

const positionSchema = new Schema({
  _id: {
    type: ObjectId,
    default: function() { return ObjectId(); }
  },
  portfolio: {
    type: String
  },
  protocol: {
    type: String
  },
  asset: {
    type: String
  },
  assetType: {
    type: String
  }
}, {
    collection: 'positions'
  })

module.exports = mongoose.model('Position', positionSchema);
