const Course=require('../models/Course')
const { mutipleMongooseToObject}= require('../../util/mongoose')

class NewsController{
    index(rep, res, next){
        
    // get /new
    //  res.render('news');
    // Course.find({}, function(err,courses){
    //        if(!err) res.render('home',{courses})
    //           else{
    //               res.status(403).json({error:'ERROR!'}) 
    //           }
    //       })
     Course.find({})
     .then(courses => {  
      res.render('news',{
          courses: mutipleMongooseToObject(courses)
        })
     })
     .catch(next)

    }
    // res.json({
    //     name:'test'
    // })
    // lay data tu data ra
    //  Course.find({}, function(err,courses){
    //      if(!err) res.json(courses)
    //      else{
    //          res.status(403).json({error:'ERROR!'}) 
    //      }
    //  })
    // lay data khoa học từ mogodb
    // Course.find({})
    //    .then(courses => res.render(courses))
    //    .catch(next)
    


   show(rep, res){
       res.send('NEWS DETAIL!!!')
   }
}
module.exports=new NewsController;

