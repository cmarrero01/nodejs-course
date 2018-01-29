const User = require('./user_model.js');

module.exports = (app) => {
    app.post('/user/update/:userId',(req,res)=>{
        User.findByIdAndUpdate(req.params.userId,{$set:req.body},(err,doc)=>{
            res.json(doc);
        })
    });
};
