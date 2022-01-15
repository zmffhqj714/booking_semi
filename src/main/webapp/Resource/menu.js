/**
 * 
 */

function purchase(srcode){
	let data = "";
let data1 = "";
	const reserpack1= document.getElementsByName("onlyone");
	if (reserpack1[0].checked == false&&reserpack1[1].checked == false) {
			alert("포장 / 예약을 확인해주세요.");
			return;
        }
	
	for (i=0; i<reserpack1.length; i++) {
        if (reserpack1[i].checked == true) {
			data = "reserpack="+reserpack1[i].value;
			data += "&srcode="+srcode;
        }
    }
	
	
	let checklist = document.getElementsByName("check");
	
	 for (i=0; i<checklist.length; i++) {
		if (checklist[i].checked == true) {
			if(checklist[i].parentElement.childNodes[3].innerText =="품절"){
				alert("품절입니다.");
				data1="";
				return;
				}
			}
        if (checklist[i].checked == true) {
			if(checklist[i].parentElement.childNodes[4].value=="0"){
				alert("수량을 입력해주세요");
				data1="";
				return;
			}
			data1+="&mecode="+checklist[i].parentElement.childNodes[3].value;
			data1+="&mename="+checklist[i].parentElement.childNodes[1].value;
			data1+="&price="+checklist[i].parentElement.childNodes[2].value;
			data1+="&quantity="+checklist[i].parentElement.childNodes[4].value;
        }
    }
	if(data1==""){
		alert("메뉴를 체크해주세요");
			return;
	}
location.href = "payment?"+data+data1;
}



function menulist(qsrcode){
	const srcode = "srcode="+qsrcode;
	getAjaxJson("getmenulist",srcode,"menulist1");
}


const itemname= ["menuName","menuPrice","state"];


function menulist1(list1){
		const list = document.getElementById("list");

	for(i=0;i<list1.length;i++){
		let record = createDiv("record","menuList");
		let input = createinput("check","check");
		input.setAttribute("type","checkbox");
		record.appendChild(input);
		for(j=0;j<3;j++){
			let item = createDiv(itemname[j],itemname[j]);
			item.innerHTML = (j==0)?list1[i].mename:(j==1)?list1[i].price:((list1[i].stcode==-3)?"품절":"");
			item.value = (j==0)?list1[i].mename:(j==1)?list1[i].price:list1[i].mecode;
		record.appendChild(item);
		}
		if(list1[i].stcode==3){
			let input1=createinput("number","number");
			input1.setAttribute("type","number");
			input1.setAttribute("value","0");
			input1.setAttribute("min","0");
			input1.setAttribute("max","100");
			record.appendChild(input1);
		}
		list.appendChild(record);
		const image = document.getElementById("image");
      if(list1[0].srcode=="1002"){
         let imgdiv = createDiv2("","job");
         let img = createimg("image/job.jpg")
         imgdiv.appendChild(img);
         image.appendChild(imgdiv);
         
          imgdiv = createDiv2("","ssam");
          img = createimg("image/ssam.jpg")
         imgdiv.appendChild(img);
         image.appendChild(imgdiv);
         
          imgdiv = createDiv2("","beef");
          img = createimg("image/beef.jpg")
         imgdiv.appendChild(img);
         image.appendChild(imgdiv);
         
          imgdiv = createDiv2("","je6");
          img = createimg("image/je6.jpg")
         imgdiv.appendChild(img);
         image.appendChild(imgdiv);
         
          imgdiv = createDiv2("","jang");
          img = createimg("image/jang.jpg")
         imgdiv.appendChild(img);
         image.appendChild(imgdiv);
      }
	}
}

function createimg(src1){
   const img = document.createElement("img");
   img.setAttribute("src",src1);
   return img;
}
function createDiv2(name,id1){
	const div = document.createElement("div");
	div.setAttribute("name",name);
	div.setAttribute("id",id1);
	return div;
}	

function createDiv(name,class1){
	const div = document.createElement("div");
	div.setAttribute("name",name);
	div.setAttribute("class",class1);
	return div;
}	

function createspan(name,class1){
	const span = document.createElement("span");
	span.setAttribute("name",name);
	span.setAttribute("class",class1);
	return span;
}

function createinput(name,class1){
	const input = document.createElement("input");
	input.setAttribute("name",name);
	input.setAttribute("class",class1);
	return input;
}


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


function makeForm(fname, faction, fmethod){
	const form = document.createElement("form");
	if(fname != ""){form.setAttribute("name", fname);}
	form.setAttribute("action", faction);
	form.setAttribute("method", fmethod);
	return form;
}