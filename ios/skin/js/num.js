
/** 初始化一个空数组用来存放已经添加的ID */
var ids = new Array();
/** 自增ID */
var tempId = 0;
/** 总份数*/
var fens = document.getElementById("fen");
//var fen = parseFloat(fens.value); 
var fen = parseFloat(fens.innerHTML);
var allmoney = document.getElementById("allmoney"); 
/** 总价格 */
var paymoney = parseFloat(allmoney.innerHTML);
var curCount;
var num = 0;
var fee = document.getElementById('fee');
var ff = document.getElementsByClassName('ff')[0];
var servmoeny = document.getElementById("servmoney");
//服务费
var fwf = parseFloat(servmoeny.innerHTML);
window.onload=function(){
    var servTotal = document.getElementById('servTotal');
	var ordFen = document.getElementsByClassName('numTxt');
	var ordPrice = document.getElementsByClassName('price');
	fen = 0;
	paymoney = 0;
	for(var i = 0;i < ordFen.length;i++){
		fen += parseInt(ordFen[i].value);
		paymoney += parseFloat(parseInt(ordFen[i].value)*parseFloat(ordPrice[i].innerHTML));
		console.log(paymoney)
	}
	if(paymoney>300 ||paymoney<=0){
		fwf = 0;
		ff.style.display='none';
		servmoeny.innerHTML = fwf;
		fee.value = fwf;

	}
		
	if(paymoney>0 && paymoney<=240){
       fwf = 60;
       ff.style.display='';
       servmoeny.innerHTML = fwf;
       fee.value = fwf;
	}
	if(paymoney>240 && paymoney<=300){
		ff.style.display='';
       fwf = 300-paymoney;
       servmoeny.innerHTML = fwf;
       fee.value = fwf;
	}
	console.log(fee.value);
	fens.innerHTML = fen;
	allmoney.innerHTML = (paymoney+fwf+parseFloat(servTotal.value)).toFixed(2);
}

function IsNum(e) {
            var k = window.event ? e.keyCode : e.which;
            if (((k >= 48) && (k <= 57)) || k == 8 || k == 0) {
            } else {
                if (window.event) {
                    window.event.returnValue = false;
                }
                else {
                    e.preventDefault(); //for firefox 
                }
            }
        } 

function blurWrite(input){
	if(input.value == '' || input.value == NaN ||input.value == 0){
		input.value = num;
	}else{
		num = input.value;
	}
	
	console.log(num)
}
function ueserWrite(obj){
   curCount = obj.value;
 if(!/^[0-9]*[1-9][0-9]*$/.test(obj.value) || curCount ==''|| curCount>=200){
 	alert("请输入大于0的整数哟！");
 	obj.focus();
 	obj.value=num;
 	return false;
 }

 var prices = obj.parentNode.parentNode.getElementsByClassName("price")[0].innerHTML;
    // alert(prices);
     console.log(fen);
    fen +=(parseFloat(curCount) - num);
    fens.innerHTML = fen;
    paymoney += (parseFloat(curCount) - num)*prices;
    if(paymoney>300 ||paymoney<=0){
		fwf = 0;
		ff.style.display='none';
		servmoeny.innerHTML = fwf;
		fee.value = fwf;

	}
		
	if(paymoney>0 && paymoney<=240){
       fwf = 60;
       ff.style.display='';
       servmoeny.innerHTML = fwf;
       fee.value = fwf;
	}
	if(paymoney>240 && paymoney<=300){
		ff.style.display='';
       fwf = 300-paymoney;
       servmoeny.innerHTML = fwf;
       fee.value = fwf;
	}
    allmoney.innerHTML= (paymoney+fwf+parseFloat(servTotal.value)).toFixed(2);
}

function handle(self, isAdd){
    var countEl = self.parentNode.childNodes[3];
        curCount = parseFloat(countEl.value); 
        
	var reduce = self.parentNode.childNodes[1];
	var price = self.parentNode.parentNode.getElementsByClassName("price")[0].innerHTML; /* 获取价格 */
//	var foodname = self.parentNode.parentNode.getElementsByClassName("foodname")[0].innerHTML; /* 获取食物名 */
	var foodId = self.parentNode.parentNode.childNodes[1].value;

    if(isAdd){
		curCount++;
		console.log(curCount);
		fen++;
		reduce.style.display="inline-block";
		countEl.style.display="inline-block";
		paymoney += parseFloat(price);
		// prabola();
	}else{
		curCount--;
		console.log(curCount);
		fen--;
		if(curCount <1){
			curCount = 0; 
			paymoney =paymoney-parseFloat(price)*1;
			reduce.style.display="none";
			countEl.style.display="none";

		}else
			paymoney -= parseFloat(price);
	}
	if(paymoney>300 ||paymoney<=0){
		fwf = 0;
		ff.style.display='none';
		servmoeny.innerHTML = fwf;
		fee.value = fwf;
	}
		
	if(paymoney>0 && paymoney<=240){
       fwf = 60;
       ff.style.display='';
       servmoeny.innerHTML = fwf;
       fee.value = fwf;
	}
	if(paymoney>240 && paymoney<=300){
       fwf = 300-paymoney;
       ff.style.display='';
       servmoeny.innerHTML = fwf;
       fee.value = fwf;
	}
	console.log(fee.value);
	fens.innerHTML=fen;
    countEl.value=curCount;
	allmoney.innerHTML= (paymoney+fwf+parseFloat(servTotal.value)).toFixed(2);
}




// function handleHidden(id,name, count,total, fid){
// 	var hiddens = document.getElementById("hiddens");
// 	for(var i = 0; i < ids.length; i++){
// 		if(ids[i] == id){
// 			var hiddenInput0 = hiddens.childNodes[i * 4 ];
// 			var hiddenInput1 = hiddens.childNodes[i * 4 + 1];
// 			var hiddenInput2 = hiddens.childNodes[i * 4 + 2];
// 			var hiddenInput3 = hiddens.childNodes[i * 4 + 3];
// 			if(count == 0){
// 				hiddens.removeChild(hiddenInput0);
// 				hiddens.removeChild(hiddenInput1); /** 移除该元素 */
// 				hiddens.removeChild(hiddenInput2);
// 				hiddens.removeChild(hiddenInput3);
// 				ids.splice(i, 1); /** 从数组中移除ID */
// 			}else
// 				hiddenInput1.value = name;
// 				hiddenInput2.value = count+"份";
// 				hiddenInput3.value = "￥"+total;
// 			return;
// 		}	
// 	}

// 	if(count > 0 ){
// 		addHiddenChild(hiddens, id,name, count,total, fid);
// 		ids.push(id); /** 向数组中添加ID */
// 	}
// }

// function addHiddenChild(hiddens, id,name, count,total, fid){
// 	var hiId = document.createElement( "input");
// 	var hiName = document.createElement( "input");
// 	var hiNum = document.createElement( "input");
// 	var hiTotal = document.createElement( "input");
// 	hiId.setAttribute( "type", "hidden");
//     hiName.setAttribute( "type", "hidden");
//     hiNum.setAttribute( "type", "hidden");
//     hiTotal.setAttribute( "type", "hidden");
//     hiId.name = "foodIds[]";
//     hiName.name = "foodlist[]";
//     hiNum.name = "foodNum[]";
//     hiTotal.name = "foodTotal[]";
//     hiId.value = fid;
//     hiName.value = name;
//     hiNum.value = count+"份"; 
//     hiTotal.value = "￥"+total; 
//     hiddens.appendChild(hiId); 
//     hiddens.appendChild(hiName);
//     hiddens.appendChild(hiNum);
//     hiddens.appendChild(hiTotal); 
// }