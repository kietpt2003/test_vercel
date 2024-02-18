import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    account_id: {
        type: Number
    },
    limit: {
        type: Number,
    },
    products: {
        type: [String]
    }
}, {
    collection: 'accounts',
    versionKey: false
});

let Material = mongoose.model('accounts', materialSchema);

module.exports = Material;
