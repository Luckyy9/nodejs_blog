const newsRouter=require('./news')
// const siteRouter=require('./site')

function route(app){

    app.get('/', function(req, res) {
        return res.render('home');
      })
      // app.use('/',siteRouter)
      
      app.use('/news', newsRouter);
      // app.get('/news', function(req, res) {
      //   return res.render('news');
      // })
      app.get('/search', function(req,res){
        return res.render('search');
      })
      app.post('/search', function(rep,res){
        // console.log(req.body);
        res.send('');
      })
}

module.exports=route;
