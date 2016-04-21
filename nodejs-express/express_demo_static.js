/**
*
*使用Express网络框架静态文件
*/

var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var fs=require('fs');
var multer=require('multer');

app.use(express.static('public'));
var urlencodedParser=bodyParser.urlencoded({extended:false});
app.use(multer({dest:'/tmp/'}).array('image'));

app.get('/upload.html',function (req,res) {
	res.sendFile(__dirname+"/"+"upload.html");
})

/**
*get 方法
*/
app.get('/input_get',function (req,res) {
	response={
		firstName:req.query.first_name,
		secondName:req.query.second_name
	};

	console.log(response);
	res.send(JSON.stringify(response));
})

/**
*post 方法
*/
app.post('/input_post',urlencodedParser,function (req,res) {
		response={
		firstName:req.body.first_name,
		secondName:req.body.second_name
	};

	console.log(response);
	res.send(JSON.stringify(response));
})

/**
*文件上传
*/
app.post('/file_upload',function (req,res) {
	//打印上传文件信息
	console.log(req.files[0]);

	//文件路径
	var dest_file=__dirname+"/"+req.files[0].originalname;
	//读取文件
	fs.readFile(req.files[0].path, function (err,data) {
		//写文件
		fs.writeFile(dest_file, data, function (err) {
			if(err){
				console.log(err);
			}else{
				response={
						message:'File uploaded Success!',
						filename:req.files[0].originalname
						};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
})

var server=app.listen(8081,function () {
	var host=server.address().address
	var port=server.address().port

	console.log('http://%s:%s',host,port);
})