/*
var sum = 0;
var i = 1;
while(i<=100){
	sum = sum + i;
	i++;
}
document.write(sum);
*/

/*
for (var sum = 0, i = 1; i<=100;){
	sum = sum + i;
	i++;
}
document.write(sum);

for(var a = 0, b = 1; b <=100; b++){

	a = a + b;
}
document.write(a);


var arr = [ 2, 3, 45, 67, 123, 12, 89, 6, 7 ,88, 45.7];

//首先，取数组的长度document.write(arr.length);
//然后，依次获取数组内的每一个数值，直到最后一个数值，它的位置是length-1，然后把他们相加
//var i = 0, a = arr [i]; i <= length-1, i++ 循环体是 a = 0 + a



var l = arr.length
for(var i = 0, sum =0; i<=l-1; i++){
	var a = arr[i];
	sum = sum + a;

}
document.write(sum);
*/

//var strArr = ["hello", "world", "anna", "wishing"];
//document.write(strArr[0] +' ' + strArr[1] + ' ' + strArr[2] +strArr[3]);
//先取数组的长度
/*
var L = strArr.length;
for(i = 0, sum = ''; i<L-1; i++){
	var a = strArr[i] + ' ';
	sum = sum + a;
}
var b = strArr[L-1];
document.write(sum+b);
*/

//document.write(strArr.join(' '));
/*
var str = "hello world annawishing";
var L = str.length;
for(var i=L-1, sum = ''; i>0 ; i--){
	var a = str[i];
	var sum = sum + a;
}
document.write(sum+str[0]);

var test = [1,"timeout",33,"mini",44,55,"hello",445,26.8,"world"];
var L = test.length;
for(var i = 0; i<L; i++) {
	if (typeof test[i] == 'number'){
		test[i] = test[i] * 2;
	} else if (typeof test[i] == 'string'){
		test[i] = test[i] + ' anna';
	}
}

document.write(test.join(','));
*/

// 写一个函数，计算一个人身高体重是不是符合标准，偏瘦则返回 -1，正常则返回 0，偏胖则返回 1
//身高为h，实际体重为w，则标准体重值为var a = 

/*
function weight (h,w) {
	var a = h / 100 * h / 100 * 18.5;

	if (w < a - 1) {
		return '偏瘦';
	}
	else if (w > a + 5) {
		return '偏胖';
	}
	else{
		return '体重符合标准';
	}
}


// 计算出每个人是偏胖还是偏瘦还是标准
var people = [ ["anna",161,46], ["kate",172,89], ["yellong",163,76.5], ["sam",153,51.8] ];
var L = people.length;
var result = [];
for (var i = 0; i < L; i++) {
	var w = people[i][2];
	var h = people[i][1];
	var name = people[i][0];

	result[i] = name + weight(h,w);

};

document.write(result);
*/
/*
var person = { name: "anna", height: 161, weight: 43 }
document.write(person.name + '身高' + person.height + 'cm, 体重' + person.weight + 'kg');
*/

// 打印书本名称，用分号分割，然后再打印作者名称，用分号分割
/*
var book_list = { "西游记": "吴承恩", "水浒传": "施耐庵", "三国演义": "罗贯中", "红楼梦": "曹雪芹" }
var book_name;
var book_names = [];
var book_authors = [];
var i = 0;
for(book_name in book_list; ){
	book_names[i] = book_name;
	book_authors[i] = book_list[ ];
	i++;  
}
document.write(book_names.join(';')); 
document.write('<br/>');
document.write(book_authors.join(';'));
*/

var strArr = [];
for(var i = 9, x = '$'; i>=0; i--){
	strArr[i] = x;
	x = x + '$';

}

document.write(strArr.join('<br/>'));


 




