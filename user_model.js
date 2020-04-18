const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nom: { type: String, unique: true, required: true },
    prenom : { type: String, required: true },
    hash: { type: String, required: true },
    login : { type: String, required: true },
    date_creation: { type: Date, default: Date.now },
    latitude:{ type: String, default:""},
    longitude:{ type: String, default:""},
    amis:{type : Array, default:[]}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);