const User = require('./user_model.js');

module.exports = (app) => {
    app.post('/user/remove',(req,res)=>{
        User.remove({_id: req.body.userId},(err,doc)=>{
            res.json(doc);
        })
    });
};
