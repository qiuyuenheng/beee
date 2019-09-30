/*顶部搜索框图标*/
var ipt = document.getElementsByClassName("search")[0];
var img = document.getElementsByClassName("img")[0];

ipt.onfocus = function(){
	img.style.display = "none";
}

ipt.onblur = function(){
	if(ipt.value=="")
	{
		img.style.display = "block";
	}
}

