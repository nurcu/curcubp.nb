const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
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

positionSchema.index({portfolio: 1, protocol: 1, asset: 1}, {unique: true});

module.exports = mongoose.model('positions', positionSchema);
