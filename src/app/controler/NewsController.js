const Course=require('../models/Course')

class NewsController{
    index(rep, res){
        
    // get /new
    //  res.render('news');
    // res.json({
    //     name:'test'
    // })
    // lay data tu data ra
     Course.find({}, function(err,courses){
         if(!err) res.json(courses)
         else{
             res.status(403).json({error:'ERROR!'}) 
         }
     })
    }


   show(rep, res){
       res.send('NEWS DETAIL!!!')
   }
}
module.exports=new NewsController;

