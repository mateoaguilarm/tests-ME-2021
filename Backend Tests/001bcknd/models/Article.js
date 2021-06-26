const mongoose = require(`mongoose`);

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },

});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;