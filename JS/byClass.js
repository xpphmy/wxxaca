function byClass(className){//全局获取
	var tags=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	for(var i=0;i<tags.length;i++){
		if(tags[i].className==className){
			arr.push(tags[i]);
		}
	}
	return arr;
}
function byClass2(parentId,className){//局部获取
	var parent=document.getElementById(parentId);
	var tags=parent.all?parent.all:parent.getElementsByTagName('*');
	var arr=[];
	for(var i=0;i<tags.length;i++){
		if(tags[i].className==className){
			arr.push(tags[i]);
		}
	}
	return arr;
}