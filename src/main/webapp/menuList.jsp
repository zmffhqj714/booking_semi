<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Menu List</title>
<script src="Resource/menu.js"></script>
<link rel="stylesheet" type="text/css" href="Resource/menu.css" />
</head>
<body onLoad="menulist(${srcode})">
	<div id="stName"> ${srname}</div>
	<div>
		<input type="radio" name="onlyone" class="packing" value="1" /><span
			id="pName">포장</span> <input type="radio" name="onlyone"
			class="reservasion" value="2" /> <span id="rName">예약</span>
	</div>
	<article id="list"></article>
	<!-- <div id="menuList">
		<input type="checkbox" id="check" />
		<span class="menuName">메뉴이름</span><span class="menuPrice">메뉴가격</span>
		<span class="state">판매상태 : 품절</span>
	</div>
	<div>
		<input type="number" id="number" value="1" min="1" max="100" />
	</div> -->
	<div>
		<input type="button" id="purchase" value="구매" onClick="purchase(${srcode})" />
	</div>
	<article id = "image"></article>

</body>
</html>