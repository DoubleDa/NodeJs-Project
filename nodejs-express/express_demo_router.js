/**
*使用Express网络框架路由
*
*/

var express=require('express');
var app=express();

/**
*get 请求
*/
app.get('/',function (req,res) {
	console.log('get请求');
	res.send('Hello Get!');
})

/**
*post 请求
*/
app.post('/',function (req,res) {
	console.log('post请求');
	res.send('Hello Post!');
})

/**
*delete 请求
*/
app.delete('/delete_user',function (req,res) {
	console.log('delete请求');
	res.send('Hello Delete!');
})

/**
*get list 请求
*/
app.get('/list_user',function (req,res) {
	console.log('get list请求');
	res.send('Hello Get List!');
})

/**
*对ab1cd,ab123cd get 请求
*/
app.get('/ab*cd',function (req,res) {
	console.log('get ab*cd请求');
	res.send('Hello get ab*cd!');
})


var server=app.listen(8081,function () {
	var host=server.address().address
	var port=server.address().port

	console.log("http://%s:%s",host,port);
})