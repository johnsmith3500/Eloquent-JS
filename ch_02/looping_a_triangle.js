/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
### 
#### 
##### 
###### 
#######
*/
var x='#';		// Construction block for the triangle
var str='';
for(var i=1; i<=7; i++)
{
	str+=x;
	console.log(str);
}