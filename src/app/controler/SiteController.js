const { render } = require('node-sass');
const Course=require('../models/Course')

class SiteController{
    home(rep, res, next){
    // get /home
    //  res.render('home')
    Course.find({})
        .then(courses => res.render('home',{
            title:'Test'
        }))
        .catch(next)
  
    }


   search(rep, res){
    //    get /search
       res.render('seach')
   }
}
module.exports=new SiteController;

