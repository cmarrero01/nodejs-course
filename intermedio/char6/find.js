const User = require('./user_model.js');

module.exports = (app) => {
    app.get('/user/get/all',(req,res)=>{
        User.find({},(err,doc)=>{
            res.json(doc);
        });
    });

    app.get('/user/get/:userId',(req,res)=>{
        User.findById(req.params.userId,(err,doc)=>{
            res.json(doc);
        })
    });
};
