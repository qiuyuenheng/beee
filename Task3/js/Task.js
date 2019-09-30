var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input");
    var number = document.getElementById("aqi-value-input");
	city = city.value;
	number = number.value;
	aqiData[city] = number;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	var str = "";
	var tit = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for (var key in aqiData)
	{
		str = str + "<tr><td>"+key+"</td><td>"+aqiData[key]+"</td><td><button>删除</button></td></tr>";
	}
	tit = tit+str;
	table.innerHTML=tit;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  	addAqiData();
  	renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  
	delete aqiData[city];
	renderAqiList();
}

function init() {
	var addbutton = document.getElementById("add-btn");
	addbutton.addEventListener("click", addBtnHandle);
	
}

init();