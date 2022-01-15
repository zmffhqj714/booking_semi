/**
 * 태그를 만들수 있음
 */
function logout1() {
        const form = makeForm("","CUAccessOut","post");
		document.body.appendChild(form);
		form.submit();
      }

function accessOut(soCode, slCode) {
         location.href = "AccessOut?soCode=" + soCode + "&slCode=" + slCode;
      }

function logout(qsrcode){
   const form = makeForm("", "MaAccessout", "post")
      const srcode = makeInputElement("hidden","srcode",qsrcode,"");
      form.appendChild(srcode);
      
      document.body.appendChild(form);
      form.submit();
   
}

function isEmpty(obj) {
		let check = true;
		if (obj.value == "") {
			check = false;
		}
		return check;

	}



function makeForm(fname, faction, fmethod){
	const form = document.createElement("form");
	if(fname != ""){form.setAttribute("name", fname);}
	form.setAttribute("action", faction);
	form.setAttribute("method", fmethod);
	return form;
}

function makeInputElement(type, name, value, placeholder){
	const input = document.createElement("input");
	input.setAttribute("type", type);
	input.setAttribute("name", name);
	if(value != ""){input.setAttribute("value", value);}
	if(placeholder != ""){input.setAttribute("placeholder", placeholder);}
	
	return input;
}

function plzlogin() {
   alert("로그인이 필요한 서비스입니다.");

   }
function authenticationCu() {
	const cucode = document.getElementsByName("cuCode");
	const password = document.getElementsByName("cuPassword");
	if(cucode[0].value==""){
		cucode[0].placeholder="아이디를 입력해 주세요";
		return;
	}
	if(password[0].value==""){
		password[0].placeholder="비밀번호를 입력해 주세요";
		return;
	}
	let form = document.getElementsByName("login")[0];

    form.submit();
}	
	 
function authenticationMa() {
	const srcode = document.getElementsByName("srCode");
	const password = document.getElementsByName("srPassword");
	if(srcode[0].value==""){
		srcode[0].placeholder="아이디를 입력해 주세요";
		return;
	}
	if(password[0].value==""){
		password[0].placeholder="비밀번호를 입력해 주세요";
		return;
	}
	let form = document.getElementsByName("login")[0];

         form.submit();
	
      }

function ClickOrderList(srCode){
		let list = document.getElementById("list");
		
		while(list.hasChildNodes()){
			list.removeChild(list.lastChild);
		}
					
	const day = document.querySelector("#date").value;
	if(day==""){
		alert("날짜를 선택해주세요.");
		return;
	}
		let data = "srCode=" + encodeURIComponent(srCode)+"&otDate="+encodeURIComponent(day);
	//alert(data);
	getAjaxJson("GetOrderInfo",data, "addOrders");
	
		}
		
let orderOne = [];		



	
	

function getAjaxJson(action, data, fn) {
	const ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			
		window[fn](JSON.parse(ajax.responseText));
		
	}
	};

	ajax.open("post", action, true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	ajax.send(data);
}


	

function addOrders (ordersInfo) {

	let list = document.getElementById("list");	
	if(Object.keys(ordersInfo).length != 0){
	for (colIndex= 0; colIndex <Object.keys(ordersInfo).length ; colIndex++) {	
		
		orderOne[colIndex] = 
   		"<span id = 'otDate'>"+ordersInfo[colIndex].otDate+"</span>"+'\u00A0'+
        "<span id = 'otTime'>"+ ordersInfo[colIndex].otTime+"에"+"</span>"+'\u00A0'+
      	"<span id = 'meCode'>"+ordersInfo[colIndex].meCode+"</span>"+
        "<span id = 'meName'>"+ordersInfo[colIndex].meName +"</span>"+'\u00A0'+"*"+'\u00A0'+
        "<span id = 'otQuantity'>"+ordersInfo[colIndex].otQuantity+"개"+"</span>"+'\u00A0'+
        "<span id = 'cuName'>"+ordersInfo[colIndex].cuName+"</span>"+"("+'\u00A0'+
        "<span id = 'cuNumber'>"+ordersInfo[colIndex].cuNumber+"</span>"+") 님이"+
        "<span id = 'stCode'>" +ordersInfo[colIndex].stCode+"</span>"+'\u00A0'+
        "<span id = 'stName'>"+ordersInfo[colIndex].stName+"</span>"+"하셨습니다.";
					
		let div = document.createElement("div");
		div.setAttribute("class","oneorder");
		div.innerHTML = orderOne[colIndex];
				
			
		list.appendChild(div);
	}
		}else{
			alert("해당 날짜의 주문이 없습니다.");
		}
			
}




	

		
		




