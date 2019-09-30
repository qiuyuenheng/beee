var find = document.querySelectorAll(".find");


/*我不懂为啥不行。。*/
/*for(var i=0;i<5;i++){
	find[i].onclick = function(){
		window.scrollTo(0,i*800);
	}
}*/
find[0].onclick = function(){
	window.scrollTo(0,0)
}
find[1].onclick = function(){
	window.scrollTo(0,800)
}
find[2].onclick = function(){
	window.scrollTo(0,1600)
}
find[3].onclick = function(){
	window.scrollTo(0,2400)
}
find[4].onclick = function(){
	window.scrollTo(0,3200)
}
