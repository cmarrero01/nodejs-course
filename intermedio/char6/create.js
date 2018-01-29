const User = require('./user_model.js');

module.exports = (app) => {
    app.post('/user/new',(req,res)=>{
        User.create(req.body,(err,doc)=>{
            res.json(doc);
        })
    });
};
