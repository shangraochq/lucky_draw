var result = ['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer ,
    time = 0;
var title = document.getElementById('title'),
    play=document.getElementById('play'),
    stop=document.getElementById('stop');

play.onclick = playFun;//开始抽奖
stop.onclick = stopFun;//停止抽奖

//键盘事件
document.onkeyup = function(event){
	event = event || window.event;
    if (event.keyCode == 13) {
    	if (time == 0) {
    		playFun();
    		time = 1;
    	}else{
            stopFun();
            time = 0;
    	}
    }
}


function playFun(){
	clearInterval(timer);
	function seleAward(){
		var random = Math.floor(Math.random()*result.length);
		title.innerHTML = result[random];
	}
	timer = setInterval(seleAward,50);
	play.style.background = '#999'

}
function stopFun(){
	clearInterval(timer);
	play.style.background = '#036';
}