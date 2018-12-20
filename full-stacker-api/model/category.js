const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;