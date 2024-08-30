const Book = require('../models/Book');

exports.getIndexPage = (req,res) => {


    res.render('index',{
        pageName: 'index',

    });
}