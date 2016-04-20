//引入express模块
var express=require('express');
var app=express();

/**
*res.locals
*/
// app.use(function (request,response,next) {
//       response.locals.user=request.user;
//       response.locals.authenticated !=request.user.anonymous;
//       next();
// })

// function next() {
//       console.log('next');
// }

app.get('/',function (request,response) {
      console.log('Request Success!');
	//response.send('Hello Express!');
      /**
      *res.headersSent
      */
      //false
      //console.log(response.headersSent);
      //response.send('Ok');
      //true
      //console.log(response.headersSent);

      /**
      *res.append(field [, value])
      */
      //response.append('Link',['<http://localhost/>','<http://localhost:8080/>']);
      //response.append('Set-Cookie','foo=bar;Path=/;HttpOnly');
      //response.append('Warning','Timeout');

      /**
      *res.attachment([filename])
      */
      //response.attachment();
      //response.attachment('images/logo.png');

      /**
      *res.cookie(name, value [, options])
      *expires:milliseconds
      */
      //response.cookie('name','dyx',{domain:'baidu.com',path:'/admin',secure:true});
      //response.cookie('rememberme','1',{expires:new Date(Date.now()+900000),httpOnly:true});
      //response.cookie('rememberme','1',{maxAge:900000,httpOnly:true});
      //response.cookie('cart',{items:[1,2,3]});
      //response.cookie('cart',{items:[1,2,3]},{maxAge:900000});
      //response.cookie('name','dyx',{signed:true});

      /**
      *res.clearCookie(name [, options])
      */
      //response.cookie('name','dyx',{path:'/admin'});
      //response.clearCookie('name',{path:'/admin'});

      /**
      *res.download(path [, filename] [, fn])
      */
      // response.download('images/logo.png');
      // response.download('images/logo.png','logo123.png');
      // response.download('images/logo.png','logo123.png',function(error) {
      //       if(error){

      //       }else{

      //       }
      // });

      /**
      *res.end([data] [, encoding])
      */
      //response.end();
      //response.status(404).end();

      /**
      *res.format(object)
      */
      // response.format({
      //       'text/plain':function () {
      //             response.send('dayongxin');
      //       },

      //       'text/html':function () {
      //             response.send('<p>This is a test program!</p>');
      //       },

      //       'application/json':function () {
      //             response.send({message:'success'});
      //       },

      //       'default':function () {
      //             response.statue(406).send('Not Acceptable');
      //       }
      // });
      //MIME types
      // response.format({
      //       text:function () {
      //             response.send('dayongxin');
      //       },

      //       html:function () {
      //             response.send('<p>This is a test program!</p>');
      //       },

      //       json:function () {
      //             response.send({message:'success'});
      //       }
      // });

      /**
      *res.get(field)
      */
      //response.get('Content-Type');

	/**
	*res.json([body])
	*/
      //response.json(null);
	//response.json({user:'dayongxin',phone:18716321593,address:'上海市浦东新区松林路'});
      //response.status(500).json({errorMessage:'server error!'});

      /**
      *res.jsonp([body])
      */
      //response.jsonp(null);
      //response.jsonp({user:'dayongxin'});
      //response.status(500).jsonp({error:'message'});

      /**
      *res.links(links)
      */
      // response.links({
      //       next:'http://www.baidu.com/page1',
      //       last:'http://www.baidu.com/page2'
      // });

      /**
      *res.location(path)
      */
      // response.location('back');
      // response.location('/foo/bar');
      // response.location('http://www.baidu.com');

      /**
      *res.redirect([status,] path)
      */
      // response.redirect('/foo/bar');
      // response.redirect('http://www.baidu.com');
      // response.redirect('../login');
      // response.redirect(301,'http://www.baidu.com');

      /**
      *res.render(view [, locals] [, callback])
      */
      //response.render('index');
      // response.render('index',function (error,html) {
      //       response.send(html);
      // });
      // response.render('user',{name:'dyx',age:'18'},function (error,html) {
      //       if(error){

      //       }else{
      //             response.send(html);
      //       }
      // });

      /**
      *res.send([body]):The body parameter can be a Buffer object, a String, an object, or an Array.
      */
      //Buffer
      //response.send(new Buffer('dayongxin'));
      //json
      //response.send({errorMessage:'Server Error!'});
      //html
      //response.send('<p>This is a demo!</p>');
      //status
      //response.status(404).send('Sorry!we can not find server!');
      //status error message
      //response.status(500).send({error:'error message!'});
      //response.set('Content-type','text/html');
      //response.send(new Buffer('<p>this is html</p>'));
      //response.send('<p>this is html</p>');
      //response.send({user:'dayongxin'});
      //array
      //response.send([1,2,3,4]);
      //response.send([{userName:'test1',age:18,phoneNum:13122430990},{userName:'test2',age:23,phoneNum:13122430990},{userName:'test3',age:19,phoneNum:13122430990}]);


      /**
      *res.sendStatus(statusCode)
      */
      //response.sendStatus(2000);

      /**
      *res.set(field [, value])
      */
      //response.set('Content-Type','text/html');
      // response.set({
      //       'Content-Type':'text/html',
      //       'Content-Length':'123456',
      //       'ETag':'123456'
      // });

      /**
      *res.status(code)
      */
      //response.status(200).send('ok');
      //response.status(403).end();
      //TODO 易错
      //response.status(404).sendFile('/Nodejs_Project/nodejs-express/images/404.png');

      /**
      *res.type(type):Sets the Content-Type HTTP header to the MIME type
      */
      // response.type('html');
      // response.type('plain');
      // response.type('json');
      // response.type('application/json');
      // response.type('png');

      /**
      *res.vary(field)
      */
      //response.vary('User-Agent').render('docs');
 })

      /**
      *res.sendFile(path [, options] [, fn])
      */
      // app.get('/file/:name',function (req,res,next) {
      //       var options={
      //             root:__dirname+'/public/',
      //             dotfiles:'deny',
      //             headers:{
      //                   'x-timestamp':Date.now(),
      //                   'x-sent':true
      //             }
      //       };

      //       var fileName=req.params.name;
      //       res.sendFile(fileName,options,function (error) {
      //             if(error){
      //                   console.log(error);
      //                   res.status(error.status).end();
      //             }else{
      //                   console.log('File send Success!'+fileName);
      //             }
      //       });
      // })
      /**
      *res.sendFile(path [, options] [, fn])
      */
      // app.get('/user/:uid/images/:fileName',function (req,res) {
      //       var uid=req.params.uid,
      //       fileName=req.params.fileName;

      //       req.user.mayViewFilesFrom(uid,function (yes) {
      //             if(yes){
      //                   res.sendFile('/uploads/'+uid+'/'+fileName);
      //             }else{
      //                   res.status(403).send('Send file failed!');
      //             }
      //       });
      // })


var server=app.listen(8081,function() {
	//主机地址
	var host=server.address().address
	//端口号
	var port=server.address().port
	//输出信息
	console.log("当前访问地址为 http://%s:%s",host,port);
})