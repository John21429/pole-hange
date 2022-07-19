

window.addEventListener('load',function(){
	let div = document.getElementsByClassName('video')[0];//抓最外層DIV
	let video2 = document.getElementsByClassName('video2')[0];//抓第二個影片的父層DIV
	let button = document.getElementById("button");//抓拉桿命名為button

	button.addEventListener("mousedown",function(e){ //拉桿綁定滑鼠點擊事件
		button.classList.add('active'); //拉桿綁定滑鼠點擊事件
		div.addEventListener("mousemove",function move(e){ //拉桿綁定滑鼠點擊事件
			let mx = (e.clientX - div.offsetLeft); //mx = 滑鼠X軸座標 - div的左邊(讓拉桿跟著滑鼠)
			// console.log(button.style.left); 印出來看座標數據用
			if(button.classList.contains("active")){ //要移動的判斷式
				button.style.left = `${mx}px`;//拉桿跟著滑鼠移動
				video2.style.width = `${mx}px`;//DIV的寬跟著滑鼠縮放
				e.preventDefault();//防止滑鼠的冒泡事件(我也不知道有沒有，未驗證)
			}
		})
	})

	div.addEventListener("mouseup",function(e){
		button.classList.remove("active");//當滑鼠點擊放開時，移除判斷式用的class
		e.preventDefault();//防止滑鼠的冒泡事件(我也不知道有沒有，未驗證)
	})

	div.addEventListener("mouseleave", function(e){
		button.classList.remove("active");//當滑鼠點擊放開時，移除判斷式用的class
		e.preventDefault();//防止滑鼠的冒泡事件(我也不知道有沒有，未驗證)
	})

})