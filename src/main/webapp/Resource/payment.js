/**
 * 
 */
function home(){
	location.href = "home?"
}
function insertNcheck(srcode){
	//const form = makeForm("", "insertNcheck", "post");
	
	const a1 = document.getElementsByName("mecode");
	const a2 = document.getElementsByName("quantity");
	const a3 = document.getElementsByName("reserpack");
	//const reserpack1 = makeInputElement("hidden","reserpack",a3[0].innerText,"");
	let data ="reserpack="+a3[0].innerText+"&srcode="+srcode;
	for(i=0;i<a1.length;i++){
		/*const mecode1 = makeInputElement("hidden","mecode",a1[i].innerText,"");
		const quantity1 = makeInputElement("hidden","quantity",a2[i].innerText,"");
		form.appendChild(mecode1);
		form.appendChild(quantity1);*/
		data+="&mecode="+a1[i].innerText+"&quantity="+a2[i].innerText;
	}
	/*form.appendChild(reserpack1);
	document.body.appendChild(form);
	form.submit();*/
	
	location.href = "insertNcheck?"+data;
	
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