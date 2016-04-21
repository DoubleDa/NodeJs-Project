var express=require('express');
var app=express();
var fs=require('fs');

/**
*待添加用户
*/
var addBook={
	"book6":{
		"id":1006,
		"name":"Go权威指南",
		"publisher":"电子工业出版社",
		"description":"学习Go语言最佳教程"
	}
};

/**
*删除书目id
*/
var id=2;

/**
*获取所有的书目列表
*/
app.get('/listBooks',function (req,res) {
	fs.readFile(__dirname+'/'+'book.json','utf8', function (err,data) {
		if(err){
			console.log(err);
		}else{
			console.log(data);
			res.end(data);
		}
	});
})

/**
*添加书目
*/
app.get('/addBook',function (req,res) {
	fs.readFile(__dirname+"/"+'book.json', 'utf8', function (err,data) {
		if(err){
			console.log(err);
		}else{
			data=JSON.parse(data);
			data['book6']=addBook['book6'];
			console.log(data);
			res.end(JSON.stringify(data));
		}
	});
})


/**
*显示书目详情
*/
app.get('/:id',function (req,res) {
	fs.readFile(__dirname+"/"+"book.json", "utf8", function (err,data) {
		if(err){
			console.log(err);
		}else{
			data=JSON.parse(data);
			var book=data['book'+req.params.id];
			console.log(book);
			res.end(JSON.stringify(book));
		}
	});
})

/**
*删除书目信息
*/
app.get('/deleteBook',function (req,res) {
	fs.readFile(__dirname+"/"+"book.json", "utf8", function (err,data) {
		if(err){
			console.log(err);
		}else{
			data=JSON.parse(data);
			delete data["book"+2];
			console.log(data);
			res.end(JSON.stringify(data));
		}
	});
})

var server=app.listen(8081,function () {
	var host=server.address().address
	var port=server.address().port

	console.log("http://%s:%s",host,port);
})