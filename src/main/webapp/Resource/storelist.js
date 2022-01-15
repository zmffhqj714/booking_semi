/**
 * 
 */
function gomenu(qsrcode,qsrname){
	const form = makeForm("", "gomenu", "post")
		const srcode = makeInputElement("hidden","srcode",qsrcode,"");
		form.appendChild(srcode);
		const srname = makeInputElement("hidden","srname",qsrname,"");
		form.appendChild(srname);
		
		document.body.appendChild(form);
		form.submit();
}

function getstorelist(qcacode){
	const cacode = "cacode="+encodeURIComponent(qcacode);
	getAjaxJson("getstorelist",cacode,"storelist");
}


const itemname= ["srname","address","time","open","dash","close","srcode"];


function storelist(list){
	
		const list1 = document.getElementById("list");
		
	for(i=0;i<list.length;i++){
		let record = createDiv("record","record");
		for(j=0;j<itemname.length;j++){
			let item = createDiv(itemname[j],"store "+itemname[j]);
			item.innerHTML = (j==0)?" "+list[i].srname:(j==1)?list[i].sraddress:(j==2)?"영업시간 : ":(j==3)?list[i].sropen:(j==4)?"~ ":(j==5)?list[i].srclose:list[i].srcode;
		record.appendChild(item);
		}
		record.setAttribute("onClick","gomenu('"+list[i].srcode+"','"+list[i].srname+"')");
		list1.appendChild(record);
	}
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

function makeInputElement(type, name, value, placeholder){
	const input = document.createElement("input");
	input.setAttribute("type", type);
	input.setAttribute("name", name);
	if(value != ""){input.setAttribute("value", value);}
	if(placeholder != ""){input.setAttribute("placeholder", placeholder);}
	
	return input;
}
	
	
	
	
function createDiv(name,class1){
	const div = document.createElement("div");
	div.setAttribute("name",name);
	div.setAttribute("class",class1);
	return div;
}	